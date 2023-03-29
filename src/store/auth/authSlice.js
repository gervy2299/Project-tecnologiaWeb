import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
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
        }


    }
});

export const {
    onChecking,
    onLogin,
    onLogout,
    onTimeSession
} = authSlice.actions
