import axios from "axios";
import { TWeatherData } from "src/types";
import { axiosInstance } from "src/services/axios";

/* Метод для получении информации о погоде по названию города */
export const apiGetWeatherByCity = async (city: string) => {
  try {
    const response = await axiosInstance.get<TWeatherData>("", {
      params: { q: city },
    });
    return response.data;
  } catch (err) {
    /* Проверяем, является ли ошибка экземпляром AxiosError */
    if (axios.isAxiosError(err)) {
      /* Если ошибка связана с запросом Axios, возвращаем детальную информацию */
      throw new Error(
        err.response?.data?.error?.message || "Ошибка запроса погоды"
      );
    } else {
      /* Если ошибка неизвестного типа, выбрасываем ее как есть */
      throw new Error("Неизвестная ошибка");
    }
  }
};
