import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listChecks: [],
    activeCheck: null,
    errorMessage: undefined,
}

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {

        onErrorEvent: (state, { payload }) => {
            state.errorMessage = payload;
        }
    }
});

export const { onErrorEvent } = serviceSlice.actions