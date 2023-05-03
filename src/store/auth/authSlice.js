import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
    msg: undefined,
    timeSession: 0
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {


        onChecking: (state, action) => {
            state.status = "checking";
            state.user = {};
            state.errorMessage = undefined
        },

        onLogin: (state, { payload }) => {
            state.status = "authenticated";
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout: (state, { payload }) => {
            state.status = "not-authenticated";
            state.user = {};
            state.errorMessage = payload;
        },
        onTimeSession: (state, { payload }) => {
            state.timeSession = payload;
        },
        onNewUser: (state, { payload }) => {
            state.msg = "created"
        },
        onCreateErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
        clearErrorMessage: (state, { payload }) => {
            state.errorMessage = undefined;
            state.msg = undefined;
        }


    }
});

export const {
    onChecking,
    onLogin,
    onLogout,
    onTimeSession,
    onCreateErrorMessage,
    onNewUser,
    clearErrorMessage,
} = authSlice.actions
