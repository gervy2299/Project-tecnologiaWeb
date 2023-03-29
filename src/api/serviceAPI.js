import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables"

const { apiUrl } = getEnvVariables();
export const serviceAPI = axios.create({
    baseURL: apiUrl
});


serviceAPI.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }

    return config;
})
