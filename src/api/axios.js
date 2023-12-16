import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_URL;

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosPrivate.interceptors.request.use((config) => {
    const token = Cookies.get("jwt");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { axiosPrivate };
