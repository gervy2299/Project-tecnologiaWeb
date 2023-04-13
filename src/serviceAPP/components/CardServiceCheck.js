import { Link } from "react-router-dom";
import { formatDate } from "../../helpers";
import { useServiceStore } from "../../hooks"
import internet from "../../internet.png";

export const CardServiceCheck = () => {

    const { listChecks } = useServiceStore();

    return (
        <>
            <main className="container mx-auto">
                {/*<!-- Component: Blog card with avatar --> */}
                {
                    listChecks.map(check => (


                        <div className="mt-5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200" key={check.id}>

                            <div className="p-6">
                                <header className="mb-4 flex gap-4">
                                    <img
                                        src={internet}
                                        alt="user name"
                                        title="user name"
                                        className="max-w-full rounded-full world"
                                    />
                                    <div>
                                        <Link className="text-xl font-medium text-slate-700">
                                            {check.name}
                                        </Link>
                                        <p className="text-sm text-slate-400">
                                            Creado el {formatDate(check.created_date)}
                                        </p>
                                    </div>
                                </header>
                                <table className="container w-full text-left border-collapse rounded w-overflow-x-auto ">
                                    <tbody>
                                        <tr className="border-b border-slate-300">
                                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Método</th>
                                            <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">URL</th>

                                        </tr>
                                        <tr className="border-b border-slate-200">
                                            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{check.method}</td>
                                            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{check.url}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                }

            </main>
        </>
    )
}










