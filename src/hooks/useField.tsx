import { ChangeEvent, useState } from "react";

type TypesValidationReturn = {
  regex: RegExp;
  error: string
}

type TypeValidation = {
  [key: string]: TypesValidationReturn
}

const typesValidation: TypeValidation = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: "Invalid email format",
  },
};

const useField = (type: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(type:string) {
    const validation = typesValidation[type].regex.test(value);
    if (!validation) setError(typesValidation[type].error);
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (error) setError(null);
    setValue(target.value);
  }

  function onBlur() {
    if (value === "") {
      setError("This field is blank");
      return;
    }
    if (type === undefined || type === "") return;
    validate(type);
  }

  return { value, setValue, onChange, error, onBlur };
};

export default useField;
