import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listChecks: [],
    activeCheck: null,
    errorMessage: undefined,
    currentPage: 1,
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
        },
        onNextPage: (state, { payload }) => {
            state.currentPage = state.currentPage + 1;
        },
        onPrevPage: (state, { payload }) => {
            state.currentPage = state.currentPage === 1 ? 1 : state.currentPage - 1;
        }

    }
});

export const {
    onErrorEvent,
    onSetCheckList,
    onNextPage,
    onPrevPage
} = serviceSlice.actions