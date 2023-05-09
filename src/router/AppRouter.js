import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages";
import { useAuthStore } from "../hooks";
import { RunnersPage, ServicePage } from "../serviceAPP/pages";
import { FormCheck, FormNewUser, ServiceCheck, UpdateCheck } from "../serviceAPP/components";

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
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/*" element={<Navigate to={"/login"} />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<ServicePage />} />
                    <Route path="/create-check" element={<FormCheck />} />
                    <Route path="/check/:id" element={<ServiceCheck />} />
                    <Route path="/update-check/:id" element={<UpdateCheck />} />
                    <Route path="/create-user" element={<FormNewUser />} />
                    <Route path="/runner" element={<RunnersPage />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </>)}
        </Routes>
    )
}
