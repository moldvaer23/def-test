import { TWeatherData } from "src/types";
import { apiGetWeatherByCity } from "src/utils/api";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

type TInitialState = {
  wetherData: TWeatherData | null;
  requesting: boolean;
  reqError: SerializedError | null;
};

const initialState: TInitialState = {
  wetherData: null,
  requesting: false,
  reqError: null,
};

export const getWeatherByCityThunk = createAsyncThunk(
  "weather/getWeatherByCity",
  async (city: string) => await apiGetWeatherByCity(city)
);

const weatherSlice = createSlice({
  initialState: initialState,
  name: "weather",
  reducers: {},
  selectors: {
    getWeatherData: (state) => state.wetherData,
    getWeatherRequesting: (state) => state.requesting,
    getWeatherRequestingError: (state) => state.reqError,
  },
  extraReducers: (build) => {
    build
      .addCase(getWeatherByCityThunk.pending, (store) => {
        store.requesting = true;
        store.wetherData = null;
        store.reqError = null;
      })
      .addCase(getWeatherByCityThunk.rejected, (store, action) => {
        store.requesting = false;
        store.reqError = action.error;
      })
      .addCase(getWeatherByCityThunk.fulfilled, (store, action) => {
        store.requesting = false;
        store.wetherData = action.payload;
      });
  },
});

export const {
  getWeatherData,
  getWeatherRequesting,
  getWeatherRequestingError,
} = weatherSlice.selectors;

export default weatherSlice.reducer;
