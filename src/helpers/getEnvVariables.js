export const getEnvVariables = () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    return {
        apiUrl,
        REACT_APP_API_URL: process.env.REACT_APP_API_URL,
        REACT_APP_MODE: process.env.REACT_APP_MODE
    }
}
