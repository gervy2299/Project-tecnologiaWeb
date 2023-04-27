import { useDispatch, useSelector } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onActiveCheck,
    onClickPage,
    onCreateCheck,
    onDeleteCheck,
    onErrorEvent,
    onNextPage,
    onPrevPage,
    onSetCheckList,
    onSetEvents,
    onUpdateCheck
} from "../store/service/serviceSlice";


export const useServiceStore = () => {

    const dispatch = useDispatch();
    const { listChecks, activeCheck, currentPage, events, errorMessage } = useSelector(state => state.service);



    const createNewCheck = async (form) => {

        try {

            if (form.id) {
                await serviceAPI.patch("/checks", form);
                dispatch(onUpdateCheck({ ...form }));
                return;
            }

            const { data } = await serviceAPI.post("/checks", form);
            dispatch(onCreateCheck(data));


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

    const onGetEvents = async (id, fromDate, toDate) => {


        let dateNow = new Date();
        dateNow.setHours(dateNow.getHours() - 1)

        try {

            if (fromDate === undefined) {
                const { data } = await serviceAPI.get(`/event/${id}?after=${dateNow.toISOString()}`, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                return dispatch(onSetEvents(data));
            }

            if (fromDate !== undefined) {
                const { data } = await serviceAPI.get(`/event/${id}?after=${fromDate}`, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                return dispatch(onSetEvents(data));
            }
            
            if (fromDate !== undefined && toDate !== undefined) {
                const { data } = await serviceAPI.get(`/event/${id}?after=${fromDate}&before=${toDate}`, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                return dispatch(onSetEvents(data));
            }


        } catch (error) {
            console.error(error);
        }
    }




    const onNextPageLists = () => dispatch(onNextPage());

    const onPrevPageLists = () => dispatch(onPrevPage());


    const onClickNumberPage = (page) => dispatch(onClickPage(page));






    return {
        //propierties
        listChecks,
        activeCheck,
        currentPage,
        events,
        errorMessage,


        //methods
        createNewCheck,
        getCheckLists,
        onPrevPageLists,
        onNextPageLists,
        onClickNumberPage,
        onSetActiveCheck,
        deleteCheck,
        onGetEvents
    }
}
