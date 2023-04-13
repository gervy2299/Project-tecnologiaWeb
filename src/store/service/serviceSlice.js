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

        onSetCheckList: (state, { payload }) => {
            state.listChecks = payload;
        },
        onErrorEvent: (state, { payload }) => {
            state.errorMessage = payload;
        }
    }
});

export const { onErrorEvent, onSetCheckList } = serviceSlice.actions