import { useDispatch, useSelector } from "react-redux";
import { serviceAPI } from "../api/serviceAPI";
import {
    onActiveCheck,
    onActiveRunner,
    onClickPage,
    onCloseModal,
    onCreateCheck,
    onCreateRunner,
    onDeleteCheck,
    onDeleteRunner,
    onErrorEvent,
    onNextPage,
    onOpenModal,
    onPrevPage,
    onSetCheckList,
    onSetEvents,
    onSetListRunners,
    onUpdateCheck,
    onUpdateRunner
} from "../store/service/serviceSlice";


export const useServiceStore = () => {

    const dispatch = useDispatch();
    const { listChecks, listRunners, activeCheck, currentPage, events, errorMessage, modal, activeRunner } = useSelector(state => state.service);



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

    const onGetRunners = async () => {
        try {

            const { data } = await serviceAPI.get('/runner?page_number=1&page_size=10');
            dispatch(onSetListRunners(data.data));

        } catch (error) {
            console.error(error);
        }
    }

    const createNewRunner = async (form) => {

        try {

            if (form.id) {
                await serviceAPI.patch(`/runner/${form.id}`, form, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                dispatch(onUpdateRunner({ ...form }));
                return;
            }

            const { data } = await serviceAPI.post("/runner", form);
            dispatch(onCreateRunner(data));


        } catch (error) {
            console.error(error)
        }
    }

    const onSetActiveRunner = async (id) => {
        try {

            const { data } = await serviceAPI.get(`/runner?page_number=1&page_size=10`);
            const activeRunner = data.data.find(runner => runner.id === id);
            dispatch(onActiveRunner(activeRunner));
        } catch (error) {
            console.error(error);
        }


    }

    const deleteRunner = async (id) => {
        try {
            await serviceAPI.delete(`/runner/${id}`);
            dispatch(onDeleteRunner(id));
        } catch (error) {
            console.error(error)
        }
    }






    const onNextPageLists = () => dispatch(onNextPage());

    const onPrevPageLists = () => dispatch(onPrevPage());


    const onClickNumberPage = (page) => dispatch(onClickPage(page));

    const closeModal = () => dispatch(onCloseModal());
    const openModal = () => dispatch(onOpenModal());




    return {
        //propierties
        listChecks,
        listRunners,
        activeCheck,
        currentPage,
        events,
        errorMessage,
        modal,
        activeRunner,


        //methods
        createNewCheck,
        getCheckLists,
        onPrevPageLists,
        onNextPageLists,
        onClickNumberPage,
        onSetActiveCheck,
        deleteCheck,
        onGetEvents,
        onGetRunners,
        deleteRunner,
        createNewRunner,
        onSetActiveRunner,
        closeModal,
        openModal

    }
}
