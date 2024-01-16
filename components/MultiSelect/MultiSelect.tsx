import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import style from './MultiSelect.module.scss'

import { RxCross1 } from "react-icons/rx";

export type Option = {
    label: string
    value: string | number
}

interface MultiSelectOptions {
    options: Option[];
    values: Option[];
    onChange: (value: Option[]) => void
}

const isValueNotInArray = (value: string | number, array: Option[]) => !array.some(item => item.value === value);
const doesLabelMatchInput = (label: string, input: string) => label.toLowerCase().includes(input.toLowerCase());

export default function MultiSelect({ options = [], values = [], onChange }: MultiSelectOptions) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const ref = useRef<HTMLDivElement>(null);

    const filteredOptions: Option[] = useMemo(() => {
        return options.filter((option) => {
            return isValueNotInArray(option.value, values) && doesLabelMatchInput(option.label, input);
        });
    }, [values, input])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.innerHTML)
    const handleItemClick = (option: Option) => {
        setIsOpen(false)
        onChange([...values, option])
    }
    const removeItem = (option: Option) => {
        onChange(values.filter(({ value }) => value !== option.value))
    }

    useEffect(() => {
        if (isOpen) ref?.current?.focus()
        else ref?.current?.blur()
    }, [isOpen, ref])
    
    return (
        <div className={style.select} onClick={(e) => {e.preventDefault(); setIsOpen(true)}}>
            <div className={style.chipContainer}>
                {
                    values.map((value, i) => {
                        return <div className={style.chip} key={i}>
                            {value.label}<RxCross1 onClick={() => removeItem(value)} />
                        </div>
                    })
                }
                <div ref={ref} className={style.input} onInput={handleInputChange} contentEditable data-aria-placeholder='Enter' />
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