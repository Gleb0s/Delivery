import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;

        try {
            const response = await $api.get(`/pizzas`)

        return response.data;
        } catch (error) {
            return rejectWithValue('Упс... Пиццы не были получены...');
        }
    }
  )