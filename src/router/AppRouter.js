import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages";
import { ServicePage } from "../serviceAPP/pages";

export const AppRouter = () => {
    const status = "not-authenticated";
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
