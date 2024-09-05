import axios from "axios";

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherApiUrl = "https://api.weatherapi.com/v1/current.json";

export const axiosInstance = axios.create({
  baseURL: `${weatherApiUrl}`,
  timeout: 10000,
  params: { key: weatherApiKey },
  headers: {
    "Content-Type": "application/json",
  },
});
