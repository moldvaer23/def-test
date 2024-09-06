import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import weatherReducer from "./slices/weather-slice";
import endlessReducer from "./slices/endless-feed";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  endlessFeed: endlessReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
