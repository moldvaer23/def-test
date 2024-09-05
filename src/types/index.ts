export type TWeatherData = {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
  };
};
