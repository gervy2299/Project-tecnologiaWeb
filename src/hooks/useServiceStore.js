import { useDispatch } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import { onErrorEvent } from "../store/service/serviceSlice";

export const useServiceStore = () => {

    const dispatch = useDispatch();


    const createNewCheck = async () => {

        try {

            const res = await serviceAPI.post("/checks");
            console.log(res);

        } catch (error) {
            const msg = error.response.data.title;
            dispatch(onErrorEvent(msg));
            console.error(error);
        }
    }

    const getCheckLists = () => {

    }

    return {
        //propierties


        //methods
        createNewCheck,
        getCheckLists
    }
}
