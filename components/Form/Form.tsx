"use client"

import MultiSelect from "../MultiSelect"
import { Option } from "../MultiSelect/MultiSelect"

const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ]

  const values = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
  ]

export default function Form() {
    return <div>
        <MultiSelect options={options} values={values} onChange={function (value: Option[]): void {
            throw new Error("Function not implemented.")
        } }/>
    </div>
}