import { BasicTemplate } from "../components/BasicTemplate"
import runner from "../../runner.png"
import { useServiceStore } from "../../hooks"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const RunnersPage = () => {

    const { onGetRunners, listRunners } = useServiceStore();
    useEffect(() => {
        onGetRunners();
    }, [])


    return (
        <>
            <BasicTemplate />
            <main className="container mx-auto grid grid-cols-4 gap-4">
                {
                    listRunners.map(listrunner => (
                        <div className="mt-5 mb-10 flex flex-col justify-center items-center overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200 hover:bg-slate-100" key={listrunner.id}>

                            <figure className="p-6 pb-0">
                                <img src={runner} alt="" />
                            </figure>
                            <div className="p-6">
                                <h5 className="mb-4 text-xl font-medium text-slate-800">{listrunner.name}</h5>
                                <p>

                                </p>
                            </div>
                            {
                                listrunner.id !== 1 ? (
                                    <>
                                        <div className="my-6 flex justify-end items-end btn-group">
                                            <Link

                                                className="btn border-0 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-amber-500 hover:bg-amber-600 focus:bg-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none">
                                                <span>Actualizar</span>
                                            </Link>

                                            <button
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



