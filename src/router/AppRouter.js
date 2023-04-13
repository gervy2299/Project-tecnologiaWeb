import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages";
import { useAuthStore } from "../hooks";
import { ServicePage } from "../serviceAPP/pages";

export const AppRouter = () => {

    const { status, checkSession, checkTimeSession } = useAuthStore();

    useEffect(() => {

        checkSession();
    }, []);

    useEffect(() => {
        checkTimeSession();

    }, [])



    if (status === "checking") {
        return <p>Cargando</p>
    }


    return (
        <Routes>

            {status === "not-authenticated" ? (
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
