import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks"

export const NavBar = () => {

    const { startLogout, user } = useAuthStore();


    return (
        <>
            <div className="navbar bg-blue-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/create-check"}>Crear nuevo check</Link></li>
                            <li><Link>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={"/"} className="btn btn-ghost normal-case text-white text-xl">{user.username}</Link>
                </div>
                <div className="navbar-end">
                    <button type="button" className="btn" onClick={startLogout}>
                        <p>Salir</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
