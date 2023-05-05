import { Link } from "react-router-dom";
import { formatDate } from "../../helpers";
import { useServiceStore } from "../../hooks"
import internet from "../../internet.png";
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
                                <section className="mb-4 flex justify-between gap-4">
                                    <div className="flex gap-4">
                                        <img
                                            src={internet}
                                            alt="user name"
                                            title="user name"
                                            className="max-w-full rounded-full world"
                                        />
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










