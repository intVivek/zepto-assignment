import { ChangeEvent, useMemo, useState } from 'react';
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

export default function MultiSelect({ options=[], values=[], onChange }: MultiSelectOptions) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [input, setInput] = useState<string>('');

    const filteredOptions: Option[] = useMemo(()=> {
        return options.filter((option) => {
            return isValueNotInArray(option.value, values) && doesLabelMatchInput(option.label, input);
          });
    }, [values, input])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

    const handleItemClick = (option: Option) => {
        onChange([...values, option])
    }

    return <div onClick={()=>setIsOpen(!isOpen)}>
        <div className={style.chipContainer}>
        {values.map(({label}, i)=>{
            return <div className={style.chip} key={i}>{label}<RxCross1/></div>
        })}
        </div>
        <input value={input} onChange={handleInputChange}/>
        {isOpen && <div className={style.optionsContainer}>
            {filteredOptions.map((option, i)=>{
                return <div className={style.option} onClick={()=>handleItemClick(option)} key={i}>{option.label}</div>
            })}
        </div>}
    </div>
}