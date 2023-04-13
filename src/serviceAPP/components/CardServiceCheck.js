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

            </main>
        </>
    )
}










