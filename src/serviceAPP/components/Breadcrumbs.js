import { Link, useLocation } from "react-router-dom";
import { ShowRoutes } from "../../helpers/ShowRoutes";
import { useServiceStore } from "../../hooks";

export const Breadcrumbs = () => {
    const { currentPage } = useServiceStore();
    const { pathname } = useLocation();
    const route = ShowRoutes();

    return (
        <>
            {/* <!-- Component: Elevated breadcrumb with text & leading icon --> */}
            <nav aria-label="Breadcrumb" className="container mx-auto">
                <ol className="flex h-14 list-none items-center gap-2 rounded bg-white px-4 shadow-md shadow-slate-200">
                    {
                        pathname === "/" ? (<>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg><p className="text-black">Home</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <p className="text-slate-500">Página {currentPage}</p>
                        </>
                        ) :
                            (<>
                                <Link to={"/"} className="flex gap-2 hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg><p className="text-black">Home</p>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className="text-slate-500">{route}</p>

                            </>)
                    }
                    {
                        pathname.includes("/check") ? (
                            <>
                                <p className="text-slate-500">Check</p>
                            </>
                        ) :
                            ""
                    }
                    {
                        pathname.includes("/update-check") ? (
                            <>
                                <p className="text-slate-500">Actualizar check</p>
                            </>
                        ) :
                            ""
                    }
                </ol>
            </nav>
            {/* <!-- End Elevated breadcrumb with text & leading icon --> */}
        </>
    )
}


