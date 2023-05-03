import { useSelector, useDispatch } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onChecking,
    onCreateErrorMessage,
    onLogin,
    onLogout,
    onTimeSession,
    clearErrorMessage,
    onNewUser
} from '../store/auth/authSlice'
import { onClearAllService } from "../store/service/serviceSlice";

export const useAuthStore = () => {
    const { status, user, errorMessage, msg } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (form) => {

        dispatch(onChecking());

        try {
            const { data } = await serviceAPI.post("/session/login", form);
            localStorage.setItem("token", data.token);
            dispatch(onLogin(form));

            const token = localStorage.getItem("token");
            if (token) {

                const { data } = await serviceAPI.get("/session/ttl");
                dispatch(onTimeSession(data));
            }

        } catch (error) {

            const msg = error.response.data.title;
            dispatch(onLogout(msg));
            console.error(error);

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }
    }


    const checkSession = async () => {

        const token = localStorage.getItem("token");
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await serviceAPI.get("/users");
            localStorage.getItem("token");
            dispatch(onLogin({ username: data.username, uuid: data.uuid }));

        } catch (error) {
            localStorage.removeItem("token");
            dispatch(onLogout());
            console.error(error);
        }

    }

    const checkTimeSession = async () => {

        const token = localStorage.getItem("token");
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await serviceAPI.get("/session/ttl");
            dispatch(onTimeSession(data));
        } catch (error) {
            console.error(error);
        }
    }


    const startLogout = () => {
        localStorage.removeItem("token");
        dispatch(onLogout());
        dispatch(onClearAllService());
    }

    const createNewUser = async (form) => {
        try {

            await serviceAPI.post("/register", form);
            dispatch(onNewUser());
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        } catch (error) {
            const status = error.response.data.status;

            if (status === 500) {
                return dispatch(onCreateErrorMessage("Usuario ya existe, crea otro nombre de usuario"));
            }

            const msg = error.response.data.detail;
            dispatch(onCreateErrorMessage(msg));
            console.error(error);

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const clearMessages = () => {
        dispatch(clearErrorMessage());
    }


    return {
        //propierties
        errorMessage,
        status,
        user,
        msg,


        //methods
        startLogin,
        startLogout,
        checkSession,
        checkTimeSession,
        createNewUser,
        clearMessages
    }
}
