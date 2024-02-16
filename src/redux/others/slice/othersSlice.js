import { createSlice } from "@reduxjs/toolkit";
import { fetchOthers } from "../services/fetchOtherss";

const initialState = {
  others: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const othersSlice = createSlice({
  name: "others",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchOthers.pending, (state) => {
        state.errors = null;
        state.isLoading = true;
    });
    builder.addCase(fetchOthers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.others = [...state.others, ...action.payload];
        state.hasMore = action.payload.length >= state.limit;
    });
    builder.addCase(fetchOthers.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
    });
  },
});

export const { actions: othersAction } = othersSlice;
export const { reducer: othersReducer } = othersSlice;