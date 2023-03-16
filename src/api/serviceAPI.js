import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables"

const { apiUrl } = getEnvVariables();
export const serviceAPI = axios.create({
    baseURL: apiUrl
})


