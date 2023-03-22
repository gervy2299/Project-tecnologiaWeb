import { useSelector, useDispatch } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onChecking,
    onLogin,
    onLogout,
    onSession
} from '../store/auth/authSlice'

export const useAuthStore = () => {
    const { status, user, errorMessage, session } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (form) => {

        dispatch(onChecking());

        try {
            await serviceAPI.post("/session/login", form);
            dispatch(onLogin(form));

            const time = await serviceAPI.get("/users");
            localStorage.setItem("session", time.data.anonymous);
            dispatch(onSession(time.data.anonymous));


        } catch (error) {

            const msg = error.response.data.title;
            dispatch(onLogout(msg));
            console.error(error);

        }
    }


    const checkSession = async () => {

        const session = localStorage.getItem("session");
        if (!session) return dispatch(onLogout());

        try {
            const time = await serviceAPI.get("/users");
            localStorage.setItem("session", time.data.anonymous);
            dispatch(onLogin({ username: time.data.username }));
            dispatch(onSession(time.data.anonymous));

        } catch (error) {
            localStorage.removeItem("session");
            dispatch(onLogout());
            console.error(error);
        }

    }


    const startLogout = () => {
        localStorage.removeItem("session");
        dispatch(onLogout());
    }


    return {
        //propierties
        errorMessage,
        status,
        user,
        session,


        //methods
        startLogin,
        startLogout,
        checkSession
    }
}
