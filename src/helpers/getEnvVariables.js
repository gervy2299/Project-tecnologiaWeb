export const getEnvVariables = () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    return {
        apiUrl
    }
}
