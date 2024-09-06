import { FC, FormEvent } from "react";
import { Form } from "src/components/form";
import { useDispatch, useSelector } from "src/services/store";
import {
  getWeatherByCityThunk,
  getWeatherData,
  getWeatherRequesting,
  getWeatherRequestingError,
} from "src/services/slices/weather-slice";

import "./style.css";

export const PageWeather: FC = () => {
  const weatherData = useSelector(getWeatherData);
  const requesting = useSelector(getWeatherRequesting);
  const reqError = useSelector(getWeatherRequestingError);

  const dispatch = useDispatch();

  const onSubmitForm = (_: FormEvent<HTMLFormElement>, city: string) => {
    dispatch(getWeatherByCityThunk(city));
  };

  return (
    <div className="weather__wrapper">
      <h1 className="title">
        Страница с погодой. P.S Название города писать на английском языке
      </h1>

      <Form
        onSubmitForm={onSubmitForm}
        placeholder="Название города"
        requesting={requesting}
        pattern="[a-zA-Z1-9\s]*"
      />

      {/* Если нашли город показываем данные города */}
      {weatherData && weatherData.location && weatherData.current && (
        <ul className="weather__list">
          <li>
            <span>Город: {weatherData.location.name}</span>
          </li>
          <li>
            <span>Температура: {weatherData.current.temp_c} °C</span>
          </li>
          <li>
            <span>
              Время: {weatherData.current.is_day === 1 ? "День" : "Ночь"},
              {weatherData.location.localtime}
            </span>
          </li>
        </ul>
      )}

      {/* Во время запроса показывает текст загрузки */}
      {requesting && <span>Ищем...</span>}

      {/* Если есть ошибки выводим их */}
      {reqError && reqError.message && (
        <span>Ошибка запроса: {reqError.message}</span>
      )}
    </div>
  );
};
