import { createSlice } from "@reduxjs/toolkit";
import { fetchRolls } from "../services/fetchRolls";

const initialState = {
  rolls: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const rollsSlice = createSlice({
  name: "rolls",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRolls.pending, (state) => {
        state.errors = null;
        state.isLoading = true;
    });
    builder.addCase(fetchRolls.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rolls = [...state.rolls, ...action.payload];
        state.hasMore = action.payload.length >= state.limit;
    });
    builder.addCase(fetchRolls.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
    });
  },
});

export const { actions: rollsActions } = rollsSlice;
export const { reducer: rollsReducer } = rollsSlice;