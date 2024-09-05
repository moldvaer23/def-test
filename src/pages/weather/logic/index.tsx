import { FC } from "react";
import { useSelector } from "src/services/store";
import {
  getWeatherData,
  getWeatherRequesting,
  getWeatherRequestingError,
} from "src/services/slices/weather-slice";

import { PageWeatherUi } from "../ui";

export const PageWeather: FC = () => {
  const weatherData = useSelector(getWeatherData);
  const weatherRequesting = useSelector(getWeatherRequesting);
  const weatherRequestingError = useSelector(getWeatherRequestingError);

  if (weatherRequesting) return <span>Ищем...</span>;

  return (
    <PageWeatherUi
      weatherData={weatherData}
      requestError={weatherRequestingError}
    />
  );
};
