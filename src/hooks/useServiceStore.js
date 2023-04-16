import { useDispatch, useSelector } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onClickPage,
    onErrorEvent,
    onNextPage,
    onPrevPage,
    onSetCheckList
} from "../store/service/serviceSlice";

export const useServiceStore = () => {

    const dispatch = useDispatch();
    const { listChecks, activeCheck, currentPage } = useSelector(state => state.service);



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

    const getCheckLists = async () => {
        try {
            const { data } = await serviceAPI.get(`/checks?page_size=20&page_number=${currentPage}`);
            dispatch(onSetCheckList(data.data));

        } catch (error) {
            console.error(error);
        }
    }

    const onNextPageLists = () => {

        dispatch(onNextPage());
    }
    const onPrevPageLists = () => {

        dispatch(onPrevPage());
    }

    const onClickNumberPage = (page) => {
        console.log(page);
        dispatch(onClickPage(page));
    }

    return {
        //propierties
        listChecks,
        activeCheck,
        currentPage,


        //methods
        createNewCheck,
        getCheckLists,
        onPrevPageLists,
        onNextPageLists,
        onClickNumberPage
    }
}
