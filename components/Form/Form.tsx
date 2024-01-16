"use client";

import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect";
import { Option } from "../MultiSelect/MultiSelect";
import style from "./Form.module.scss";

export default function Form() {
  const [values, setValues] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const HandleChange = (values: Option[]) => {
    setValues(values);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/getOptions");
      const response = await res.json();
      setOptions(response);
    })();
  }, []);

  return (
    <div className={style.form}>
      <MultiSelect options={options} values={values} onChange={HandleChange} />
    </div>
  );
}
