import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listChecks: [],
    activeCheck: null,
    errorMessage: undefined,
    currentPage: 1,
    events: [
        {
            "event_type": "Success",
            "event_timestamp": "2023-04-17T16:07:03.486121+00:00",
            "status": "Up",
            "response_code": 200,
            "latency": 50,
            "extra": {
                "status_text": "OK",
                "remote_ip": "142.250.191.110",
                "content_length": null,
                "http_version": "HTTP/2.0",
                "body": null
            }
        }]
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
        },
        onClickPage: (state, { payload }) => {
            state.currentPage = payload;
        },
        onActiveCheck: (state, { payload }) => {
            state.activeCheck = payload;
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
    onSetEvents
} = serviceSlice.actions