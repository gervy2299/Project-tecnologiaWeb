import { useDispatch, useSelector } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onActiveCheck,
    onClickPage,
    onDeleteCheck,
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

    const deleteCheck = async (id) => {

        try {
            await serviceAPI.delete(`/checks/${id}`);
            dispatch(onDeleteCheck(id));

        } catch (error) {
            console.error(error);
        }
    }

    const onSetActiveCheck = async (id) => {

        try {

            const { data } = await serviceAPI.get(`/checks?page_size=20&page_number=${currentPage}`);
            const activeCheck = data.data.find(check => check.id === id);
            dispatch(onActiveCheck(activeCheck));
        } catch (error) {
            console.error(error);
        }
    }

    const onSetEvents = async (id) => {
        const rangeData = {
            "after": null,
            "before": null
        }

       /*  try {

            const res = await serviceAPI.get(`/event/${id}`, rangeData);
            console.log(res);
        } catch (error) {
            console.error(error);
        } */

    }




    const onNextPageLists = () => dispatch(onNextPage());

    const onPrevPageLists = () => dispatch(onPrevPage());


    const onClickNumberPage = (page) => dispatch(onClickPage(page));






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
        onClickNumberPage,
        onSetActiveCheck,
        deleteCheck,
        onSetEvents
    }
}
