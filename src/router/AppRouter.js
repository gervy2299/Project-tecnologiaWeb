import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages";
import { useAuthStore } from "../hooks";
import { ServicePage } from "../serviceAPP/pages";

export const AppRouter = () => {

    const { status, session, checkSession } = useAuthStore();

    useEffect(() => {
        checkSession();
    }, []);

    if (status === "checking") {
        return <p>Cargando</p>
    }


    return (
        <Routes>

            {status === "not-authenticated" && session === false ? (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to={"/login"} />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<ServicePage />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </>)}
        </Routes>
    )
}
