import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listChecks: [],
    activeCheck: null,
    errorMessage: undefined,
    currentPage: 1,
    events: [],
}

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {

        onSetCheckList: (state, { payload = [] }) => {
            state.listChecks = payload;
            state.activeCheck = null;
        },
        onErrorEvent: (state, { payload }) => {
            state.errorMessage = payload;
        },
        onNextPage: (state, { payload }) => {
            state.currentPage = state.currentPage + 1;
        },
        onPrevPage: (state, { payload }) => {
            state.currentPage = state.currentPage === 1 ? 1 : state.currentPage - 1;
        },
        onClickPage: (state, { payload }) => {
            state.currentPage = payload;
        },
        onActiveCheck: (state, { payload }) => {
            state.activeCheck = payload;
        },
        onCreateCheck: (state, { payload }) => {
            state.listChecks.push(payload);
            state.activeCheck = null;
        },

        onUpdateCheck: (state, { payload }) => {
            state.listChecks = state.listChecks.map(check => {
                if (check.id === payload.id) {
                    return payload;
                }

                return check;
            });
        },
        onDeleteCheck: (state, { payload }) => {
            state.listChecks = state.listChecks.filter(check => check.id !== payload);
        },

        onSetEvents: (state, { payload }) => {
            state.events = payload;
        }

    }
});

export const {
    onErrorEvent,
    onSetCheckList,
    onNextPage,
    onPrevPage,
    onClickPage,
    onActiveCheck,
    onDeleteCheck,
    onSetEvents,
    onCreateCheck,
    onUpdateCheck
} = serviceSlice.actions