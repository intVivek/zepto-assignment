"use client"

import { useState } from "react"
import MultiSelect from "../MultiSelect"
import { Option } from "../MultiSelect/MultiSelect"

const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ]

export default function Form() {

    const [values, setValues] = useState<Option[]>([])

    const HandleChange = (values: Option[]) => {
        setValues(values)
    }
    return <div>
        <MultiSelect options={options} values={values} onChange={HandleChange}/>
    </div>
}