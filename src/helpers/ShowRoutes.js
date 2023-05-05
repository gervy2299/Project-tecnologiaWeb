import { useLocation } from "react-router-dom";

export const ShowRoutes = () => {
    const { pathname } = useLocation();
    const route = pathname.slice(1, pathname.length);
    let vspanish = ""
    switch (route) {
        case "create-check":
            vspanish = "Crear check"
            break;
        case "create-user":
            vspanish = "Crear nuevo usuario"
            break;
        default:
            vspanish = "";
            break;
    }

    return vspanish;
}
