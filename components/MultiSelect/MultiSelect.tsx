import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import style from './MultiSelect.module.scss'

import { RxCross1 } from "react-icons/rx";

export type Option = {
    label: string
    value: string | number
}

interface MultiSelectOptions {
    placeholder?: string,
    options: Option[];
    values: Option[];
    onChange: (value: Option[]) => void
}

const isValueNotInArray = (value: string | number, array: Option[]) => !array.some(item => item.value === value);
const doesLabelMatchInput = (label: string, input: string) => label.toLowerCase().includes(input.toLowerCase());

export default function MultiSelect({ placeholder = "Type Something...", options = [], values = [], onChange }: MultiSelectOptions) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const [highlight, setHighlight] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const filteredOptions: Option[] = useMemo(() => {
        return options.filter((option) => {
            return isValueNotInArray(option.value, values) && doesLabelMatchInput(option.label, input);
        });
    }, [options, values, input])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.innerHTML)
        setHighlight(false)
    }
    const handleItemClick = (option: Option) => {
        onChange([...values, option])
        setHighlight(false)
    }
    const removeItem = (option: Option) => {
        onChange(values.filter(({ value }) => value !== option.value))
        setHighlight(false)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Backspace') {
            if (!highlight) return setHighlight(true);
            values.pop()
            onChange([...values]);
            setHighlight(false);
        }
    }

    useEffect(() => {
        const onClickListener = (e: MouseEvent) => {
            if (parentRef.current?.contains(e.target as HTMLDivElement)) {
                inputRef?.current?.focus();
                setIsOpen(true);
            }
            else {
                inputRef?.current?.blur();
                setIsOpen(false);
            }
        }

        document.body.addEventListener('click', onClickListener)
        return () => document.body.removeEventListener('click', onClickListener);
    })



    return (
        <div ref={parentRef} onKeyDown={handleKeyPress} className={style.select}>
            <div className={style.chipContainer}>
                {
                    values.map((value, i) => {
                        return <div className={`${style.chip} ${highlight && i === values.length - 1 ? style.highlight : ''}`} key={i}>
                            {value.label}<RxCross1 className={style.remove} onClick={() => removeItem(value)} />
                        </div>
                    })
                }
                <div ref={inputRef} className={`${style.input} ${!values.length ? style.placeholder : ''}`} style={{ paddingLeft: values.length ? 0 : 8 }} onInput={handleInputChange} contentEditable aria-placeholder={placeholder} />
            </div>
            {
                isOpen && <div className={style.optionsContainer}>
                    {filteredOptions.length > 0 ? filteredOptions.map((option, i) => {
                        return <div className={style.option} onClick={() => handleItemClick(option)} key={i}>{option.label}</div>
                    }) : <div className={style.resultNotFound}>No Results found</div>
                    }
                </div>
            }
        </div>
    )
}