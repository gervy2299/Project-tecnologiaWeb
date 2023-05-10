import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listChecks: [],
    listRunners: [],
    activeCheck: null,
    errorMessage: undefined,
    currentPage: 1,
    events: [],
    modal: false,
    activeRunner: null,
}

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {

        onSetCheckList: (state, { payload = [] }) => {
            state.listChecks = payload;
            state.activeCheck = null;
            state.events = [];
        },
        onSetListRunners: (state, { payload = [] }) => {
            state.listRunners = payload;
            state.activeCheck = null;
            state.events = [];
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
        onActiveRunner: (state, { payload }) => {
            state.activeRunner = payload;
        },

        onCreateCheck: (state, { payload }) => {
            state.listChecks.push(payload);
            state.activeCheck = null;
        },
        onCreateRunner: (state, { payload }) => {
            state.listRunners.push(payload);
            state.activeRunner = null;
        },

        onUpdateCheck: (state, { payload }) => {
            state.listChecks = state.listChecks.map(check => {
                if (check.id === payload.id) {
                    return payload;
                }

                return check;
            });
        },
        onUpdateRunner: (state, { payload }) => {
            state.listRunners = state.listRunners.map(runner => {
                if (runner.id === payload.id) {
                    return payload;
                }

                return runner;
            });
        },
        onDeleteCheck: (state, { payload }) => {
            state.listChecks = state.listChecks.filter(check => check.id !== payload);
        },
        onDeleteRunner: (state, { payload }) => {
            state.listRunners = state.listRunners.filter(runner => runner.id !== payload);
        },

        onSetEvents: (state, { payload }) => {
            state.events = payload;
        },
        onCloseModal: (state, { payload }) => {
            state.modal = false;
            state.activeRunner = null;
        },
        onOpenModal: (state, { payload }) => {
            state.modal = true;
        },


        onClearAllService: (state, { payload }) => {
            state.listChecks = [];
            state.activeCheck = null;
            state.errorMessage = undefined;
            state.events = [];
        }

    }
});

export const {
    onErrorEvent,
    onSetCheckList,
    onSetListRunners,
    onNextPage,
    onPrevPage,
    onClickPage,
    onActiveCheck,
    onDeleteCheck,
    onDeleteRunner,
    onSetEvents,
    onCreateCheck,
    onUpdateCheck,
    onClearAllService,
    onCloseModal,
    onOpenModal,
    onUpdateRunner,
    onActiveRunner,
    onCreateRunner,
} = serviceSlice.actions