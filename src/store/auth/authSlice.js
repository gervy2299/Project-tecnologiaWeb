import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
    session: false,
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

        onSession: (state, { payload }) => {
            state.session = payload;
        },

        onLogout: (state, { payload }) => {
            state.status = "not-authenticated";
            state.user = {};
            state.errorMessage = payload;
            state.session = false;

        },


    }
});

export const {
    onChecking,
    onLogin,
    onLogout,
    onSession
} = authSlice.actions
