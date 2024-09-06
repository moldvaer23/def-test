import { ChangeEvent, FC, FormEvent, useState } from "react";

import "./style.css";

type TProps = {
  placeholder: string;
  requesting: boolean;
  pattern?: string;
  onSubmitForm: (e: FormEvent<HTMLFormElement>, data: string) => void;
};

const CONFIG_VALIDATE_RANGE = {
  MIN: 3,
  MAX: 20,
};

export const Form: FC<TProps> = ({
  placeholder,
  requesting,
  pattern,
  onSubmitForm,
}) => {
  const [formState, setFormState] = useState<string>("");

  /* Метод для валидации данных формы */
  const validate = (value: string): boolean => {
    if (value.length < CONFIG_VALIDATE_RANGE.MIN) return false;
    if (value.length > CONFIG_VALIDATE_RANGE.MAX) return false;

    return true;
  };

  const onSubmitFormWrapper = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validate(formState);
    if (valid) onSubmitForm(e, formState);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState(e.target.value);
  };

  return (
    <form onSubmit={onSubmitFormWrapper} className="form">
      <input
        className="form__input"
        maxLength={CONFIG_VALIDATE_RANGE.MAX}
        minLength={CONFIG_VALIDATE_RANGE.MIN}
        onChange={onChange}
        placeholder={placeholder}
        required
        type="text"
        {...(pattern && { pattern: pattern })}
      />
      <button className="button" type="submit" disabled={requesting}>
        Узнать
      </button>
    </form>
  );
};
