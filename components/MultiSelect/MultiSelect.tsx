import { useMemo, useState } from 'react';
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

export default function MultiSelect({ options=[], values=[], onChange }: MultiSelectOptions) {

    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = useMemo(()=>options, [options, values])


    return <div onClick={()=>setIsOpen(!isOpen)}>
        <div className={style.chipContainer}>
        {values.map(({label}, i)=>{
            return <div className={style.chip} key={i}>{label}<RxCross1/></div>
        })}
        </div>
        {isOpen && <div className={style.optionsContainer}>
            {filteredOptions.map(({label}, i)=>{
                return <div className={style.option} key={i}>{label}</div>
            })}
        </div>}
    </div>
}