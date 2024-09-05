import { FC } from "react";
import { TWeatherData } from "src/types";
import { SerializedError } from "@reduxjs/toolkit";
import { FormWeather } from "src/components/weather-form";

import "./style.css";

type TProps = {
  weatherData: TWeatherData | null;
  requestError: SerializedError | null;
};

export const PageWeatherUi: FC<TProps> = ({ weatherData, requestError }) => (
  <div className="weather__wrapper">
    <h1 className="title">
      Страница с погодой. P.S Название города писать на английском языке
    </h1>
    <FormWeather />
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
    {/* Если есть ошибки выводим их */}
    {requestError && requestError.message && (
      <span>Ошибка запроса: {requestError.message}</span>
    )}
  </div>
);
