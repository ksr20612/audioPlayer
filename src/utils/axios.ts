import axios, { AxiosError, AxiosInstance } from "axios";

const API = (baseUrl?: string): AxiosInstance => {
    const instance = axios.create({
        baseURL: baseUrl || process.env.REACT_APP_API_SERVER,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: TIMEOUT, // error.code === 'ECONNABORTED'
    });
    instance.interceptors.request.use((config) => {
        if(config.method === 'get') {
            config.timeout = TIMEOUT;
        }
        return config;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use((response) => {
        console.log({ response });
        return response;
    }, (error: AxiosError) => {
        const { code, response } = error;
        if(code === "ECONNABORTED" || response?.status === 408) {
            // timeout
            alert("서버와 연결할 수 없습니다!");
            return Promise.reject(error);
        }
        return Promise.reject(error);
    });
    return instance;
}

const TIMEOUT = 30 * 1000;

export default API;
export const source = axios.CancelToken.source();