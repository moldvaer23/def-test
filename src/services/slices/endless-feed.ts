import { apiGetEndlessFeeds } from "src/utils/api";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

type TInitialState = {
  feedData: string[];
  requesting: boolean;
  reqError: SerializedError | null;
};

const initialState: TInitialState = {
  feedData: [],
  requesting: false,
  reqError: null,
};

export const getEndlessFeeds = createAsyncThunk(
  "endlessFeed/getEndlessFeeds",
  async () => await apiGetEndlessFeeds()
);

const endlessFeedSlice = createSlice({
  initialState: initialState,
  name: "endlessFeed",
  reducers: {},
  selectors: {
    getEndlessFeedData: (state) => state.feedData,
    getEndlessFeedRequesting: (state) => state.requesting,
    getEndlessFeedRequestingError: (state) => state.reqError,
  },
  extraReducers: (build) => {
    build
      .addCase(getEndlessFeeds.pending, (store) => {
        store.requesting = true;
        store.reqError = null;
      })
      .addCase(getEndlessFeeds.rejected, (store, action) => {
        store.requesting = false;
        store.reqError = action.error;
      })
      .addCase(getEndlessFeeds.fulfilled, (store, action) => {
        store.requesting = false;
        store.feedData = store.feedData.concat(action.payload);
      });
  },
});

export const {
  getEndlessFeedData,
  getEndlessFeedRequesting,
  getEndlessFeedRequestingError,
} = endlessFeedSlice.selectors;

export default endlessFeedSlice.reducer;
