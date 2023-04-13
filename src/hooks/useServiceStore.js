import { useDispatch, useSelector } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import { onErrorEvent } from "../store/service/serviceSlice";

export const useServiceStore = () => {

    const dispatch = useDispatch();
    const { listChecks, activeCheck } = useSelector(state => state.service);


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

    const getCheckLists = async (currentPage) => {
        console.log(currentPage);
        try {
            const res = await serviceAPI.get(`/?page_size=20&page_number=0`);

        } catch (error) {
            console.error(error);
        }
    }

    return {
        //propierties
        listChecks,
        activeCheck,


        //methods
        createNewCheck,
        getCheckLists
    }
}
