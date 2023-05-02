import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables"

const { REACT_APP_API_URL } = getEnvVariables();
export const serviceAPI = axios.create({
    baseURL: REACT_APP_API_URL
});


serviceAPI.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }

    return config;
})
