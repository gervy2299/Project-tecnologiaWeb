import { useSelector, useDispatch } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onChecking,
    onLogin,
    onLogout
} from '../store/auth/authSlice'

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (form) => {
        dispatch(onChecking());


        try {
            const { data } = await serviceAPI.post("/login", form);

            dispatch(onLogin(data));

        } catch (error) {

            const msg = error.response.data.title;
            dispatch(onLogout(msg));
            console.error(error);

        }
    }

    return {
        //propierties
        errorMessage,
        status,
        user,


        //methods
        startLogin
    }
}
