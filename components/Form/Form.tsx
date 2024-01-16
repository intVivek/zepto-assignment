"use client"

import { useState } from "react"
import MultiSelect from "../MultiSelect"
import { Option } from "../MultiSelect/MultiSelect"
import style from './Form.module.scss'

const options = [
    { label: "First Option", value: 1 },
    { label: "Second Option", value: 2 },
    { label: "Third Option", value: 3 },
    { label: "Fourth Option", value: 4 },
    { label: "Fifth Option", value: 5 },
]

export default function Form() {
    const [values, setValues] = useState<Option[]>([])
    const HandleChange = (values: Option[]) => {
        setValues(values)
    }

    return (
        <div className={style.form}>
            <MultiSelect options={options} values={values} onChange={HandleChange} />
        </div>
    )
}