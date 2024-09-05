import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "src/services/store";
import { getWeatherByCityThunk } from "src/services/slices/weather-slice";

import { FormWeatherUi } from "../ui";
import { CONFIG_VALIDATE_RANGE } from "../config";

export const FormWeather: FC = () => {
  const [formState, setFormState] = useState<string>("");

  const dispatch = useDispatch();

  /* Метод для валидации данных формы */
  const validate = (value: string): boolean => {
    if (value.length < CONFIG_VALIDATE_RANGE.MIN) return false;
    if (value.length > CONFIG_VALIDATE_RANGE.MAX) return false;

    return true;
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validate(formState);

    if (valid) dispatch(getWeatherByCityThunk(formState));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState(e.target.value);
  };

  return <FormWeatherUi onChange={onChange} onSubmitForm={onSubmitForm} />;
};
