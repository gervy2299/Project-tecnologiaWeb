import { BasicTemplate } from "../components/BasicTemplate"
import { useServiceStore } from "../../hooks"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { formatDate } from "../../helpers/formatDate";
import { ModalForm } from "../components/ModalForm";

export const RunnersPage = () => {

    const { onGetRunners, listRunners, deleteRunner, onSetActiveRunner, openModal, errorMessage } = useServiceStore();
    useEffect(() => {
        onGetRunners();
    }, [])

    const handleDeleteRunner = (id) => {


        Swal.fire({
            title: '¿Estás seguro(a)?',
            text: "Ya no podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo'
        }).then((result) => {

            if (result.isConfirmed) {

                deleteRunner(id);
            }

        })


    }

    useEffect(() => {
        if (errorMessage !== undefined) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        }
    }, [errorMessage])




    const handleUpdateRunner = (id) => {
        onSetActiveRunner(id);
        openModal();
    }

    const handleModal = () => {
        openModal();
    }


    return (
        <>
            <BasicTemplate />
            <section className="container mx-auto mt-5">
                <button type="button" className="btn mt-5 hover:text-white" onClick={handleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo runner
                </button>
            </section>
            <ModalForm />

            <main className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    listRunners.map(listrunner => (
                        <div className="mt-5 mb-10 flex flex-col justify-center items-center overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200 hover:bg-slate-100" key={listrunner.id}>

                            <figure className="p-6 pb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="44"
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    className="icon icon-tabler icon-tabler-arrow-ramp-right"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M7 3v8.707M11 7L7 3 3 7M17 14l4-4-4-4"></path>
                                    <path d="M7 21a11 11 0 0111-11h3"></path>
                                </svg>
                            </figure>
                            <div className="p-6">
                                <h5 className="mb-4 text-xl font-medium text-slate-800">{listrunner.name}</h5>
                                {
                                    listrunner.id === 1 ?
                                        <p>
                                            Última actividad: {formatDate(listrunner.last_activity)}
                                        </p>
                                        : ""
                                }

                            </div>
                            {
                                listrunner.id !== 1 ? (
                                    <>
                                        <div className="my-6 flex justify-end items-end btn-group">
                                            <Link
                                                onClick={() => handleUpdateRunner(listrunner.id)}
                                                className="btn border-0 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-amber-500 hover:bg-amber-600 focus:bg-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none">
                                                <span>Actualizar</span>
                                            </Link>

                                            <button
                                                onClick={() => handleDeleteRunner(listrunner.id)}
                                                className="btn border-0 h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
                                                <span>Eliminar</span>
                                            </button>
                                        </div>
                                    </>) : ""
                            }

                        </div>
                    ))
                }
            </main>

        </>

    )
}



