import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {

        contador: (state, { payload }) => {

        }
    }
});

export const { contador } = serviceSlice.actions