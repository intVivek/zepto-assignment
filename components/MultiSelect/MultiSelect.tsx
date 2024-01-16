import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
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
    const parentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const filteredOptions: Option[] = useMemo(() => {
        return options.filter((option) => {
            return isValueNotInArray(option.value, values) && doesLabelMatchInput(option.label, input);
        });
    }, [values, input])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.innerHTML)
    const handleItemClick = (option: Option) => {
        onChange([...values, option])
    }
    const removeItem = (option: Option) => {
        onChange(values.filter(({ value }) => value !== option.value))
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
        <div ref={parentRef} className={style.select}>
            <div className={style.chipContainer}>
                {
                    values.map((value, i) => {
                        return <div className={style.chip} key={i}>
                            {value.label}<RxCross1 className={style.remove} onClick={() => removeItem(value)} />
                        </div>
                    })
                }
                <div ref={inputRef} className={`${style.input} ${!values.length ? style.placeholder : ''}`} onInput={handleInputChange} contentEditable aria-placeholder={placeholder} />
            </div>
            {
                isOpen && <div className={style.optionsContainer}>
                    {filteredOptions.map((option, i) => {
                        return <div className={style.option} onClick={() => handleItemClick(option)} key={i}>{option.label}</div>
                    })}
                </div>
            }
        </div>
    )
}