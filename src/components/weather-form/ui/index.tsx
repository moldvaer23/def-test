import { ChangeEvent, FC, FormEvent } from "react";
import { CONFIG_VALIDATE_RANGE } from "../config";

import "./style.css";

type TProps = {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FormWeatherUi: FC<TProps> = ({ onChange, onSubmitForm }) => (
  <form onSubmit={onSubmitForm} className="weather__form">
    <input
      className="weather__form-input"
      maxLength={CONFIG_VALIDATE_RANGE.MAX}
      minLength={CONFIG_VALIDATE_RANGE.MIN}
      onChange={onChange}
      placeholder="Название города"
      required
      type="text"
    />
    <button className="weather__form-button" type="submit">
      Узнать
    </button>
  </form>
);
