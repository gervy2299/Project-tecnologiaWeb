import { useSelector, useDispatch } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onChecking,
    onLogin,
    onLogout,
    onTimeSession,
} from '../store/auth/authSlice'
import { onClearAllService } from "../store/service/serviceSlice";

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
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


    return {
        //propierties
        errorMessage,
        status,
        user,


        //methods
        startLogin,
        startLogout,
        checkSession,
        checkTimeSession
    }
}
