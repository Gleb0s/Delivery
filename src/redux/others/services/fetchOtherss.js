import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOthersLimit, getOthersPage } from "../selectors/othersSelectors";

export const fetchOthers = createAsyncThunk(
    'others/fetchOthers',
    async (_, thunkAPI) => {
        const {rejectWithValue, getState} = thunkAPI;

        const page = getOthersPage(getState());
        const limit = getOthersLimit(getState());

        try {
            const response = await $api.get(`/other`, {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })

        return response.data;
        } catch (error) {
            return rejectWithValue('Упс... Прочие товары не были получены...');
        }
    }
  )