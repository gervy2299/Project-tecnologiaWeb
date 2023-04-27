import { Link, useNavigate, useParams } from "react-router-dom"
import { useServiceStore } from "../../hooks";
import { useEffect, useState } from "react";
import internet from "../../internet.png";
import { formatDate } from "../../helpers";
import { BasicTemplate } from "./BasicTemplate";
import Swal from "sweetalert2";
import { ChartCheck } from "./ChartCheck";

export const ServiceCheck = () => {

    let [dateAfter, setdateAfter] = useState("");

    const { id } = useParams();
    const { onSetActiveCheck, onGetEvents, deleteCheck, activeCheck, events } = useServiceStore();
    useEffect(() => {

        onSetActiveCheck(Number(id));
    }, [id]);

    useEffect(() => {
        onGetEvents(id);
    }, [id])


    const navigate = useNavigate();

    const handleDeleteCheck = () => {
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

                deleteCheck(id);

                Swal.fire(
                    'Eliminado',
                    'Tu archivo a sido eliminado',
                    'success'
                )

                navigate("/");

            }
        })
    }

    const handleChangeDateTimeAfter = ({ target }) => {
        let originalDateAfter = new Date(target.value);
        dateAfter = new Date(originalDateAfter);
        
        dateAfter = originalDateAfter.toISOString().slice(0, 16)
        setdateAfter(dateAfter);

        onGetEvents(id, originalDateAfter.toISOString());
    }

    const handleChangeDateTimeBefore = ({ target }) => {
        let dateFrom = new Date(dateAfter);
        if (target.value !== "") {
            let originalDateBefore = new Date(target.value);
            return onGetEvents(id, dateFrom.toISOString(), originalDateBefore.toISOString());
        }

        onGetEvents(id, dateFrom.toISOString());
    }


    return (
        <>
            <BasicTemplate />

            {
                activeCheck &&
                <main className="container mx-auto">
                    <div className="mt-5 mb-10 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200" key={activeCheck.id}>

                        <div className="p-6">
                            <header className="mb-4 flex gap-4">
                                <img
                                    src={internet}
                                    alt="user name"
                                    title="user name"
                                    className="max-w-full rounded-full world"
                                />
                                <div>
                                    <p className="text-xl font-medium text-slate-700">
                                        {activeCheck.name}
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Creado el {formatDate(activeCheck.created_date)}
                                    </p>
                                </div>
                            </header>
                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Método</th>
                                            <th>URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>

                                            <td>{activeCheck.method}</td>
                                            <td>{activeCheck.url}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div action="" className="flex mt-5 mb-10 p-4 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                                <label className="input-group input-group-md">
                                    <span>De</span>
                                    <input type="datetime-local" onChange={handleChangeDateTimeAfter} />
                                </label>
                                <label className="input-group input-group-md">
                                    <span>A</span>
                                    <input type="datetime-local" min={dateAfter} onChange={handleChangeDateTimeBefore} />
                                </label>
                            </div>
                            <ChartCheck />
                            <div className="my-6 flex justify-end items-end btn-group">
                                <Link
                                    to={`/update-check/${id}`}
                                    className="btn border-0 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-amber-500 hover:bg-amber-600 focus:bg-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none">
                                    <span>Actualizar</span>
                                </Link>

                                <button onClick={handleDeleteCheck}
                                    className="btn border-0 h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
                                    <span>Eliminar</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </main>
            }

        </>
    )
}
