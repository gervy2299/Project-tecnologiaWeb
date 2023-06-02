import { Link } from "react-router-dom";
import { formatDate } from "../../helpers";
import { useServiceStore } from "../../hooks"
import { Pagination } from "./Pagination";

export const CardServiceCheck = () => {

    const { listChecks } = useServiceStore();

    return (
        <>
            <main className="container mx-auto">
                {/*<!-- Component: Blog card with avatar --> */}
                {
                    listChecks.map(check => (


                        <div className="mt-5 mb-10 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200" key={check.id}>

                            <div className="p-6">
                                <section className="mb-4 flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex gap-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="44"
                                            height="44"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            className="icon icon-tabler icon-tabler-world"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"></path>
                                        </svg>
                                        <div>
                                            <Link to={`/check/${check.id}`} className="text-xl font-medium text-slate-700">
                                                {check.name}
                                            </Link>
                                            <p className="text-sm text-slate-400">
                                                Creado el {formatDate(check.created_date)}
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        check.status === "Up" ? (
                                            <>


                                                <span className="badge p-3 bg-green-500 text-white border-green-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                                    </svg>
                                                    Servicicio activo
                                                </span>

                                            </>
                                        ) :
                                            (
                                                <>
                                                    <span className="badge py-3 bg-red-500 text-white border-red-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                                        </svg>
                                                        Servicio inactivo
                                                    </span>
                                                </>
                                            )
                                    }

                                </section>
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

                                                <td>{check.method}</td>
                                                <td>{check.url}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Pagination />

            </main>
        </>
    )
}










