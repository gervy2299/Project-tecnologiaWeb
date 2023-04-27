import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { serviceSlice } from './service/serviceSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        service: serviceSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        
        serializableCheck:false
    })
})