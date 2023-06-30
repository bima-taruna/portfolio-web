import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export interface UserProps {
    username: string;
    name: string;
    password: string;
}

export interface LoginProps {
    username: string;
    password: string;
}

const loginUser = async (username: any, password: any) => {
    const response = await axios
        .post(`${API_URL}users/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    } else {
        return response
    }

    return response.data;
}

const logoutUser = () => {
    localStorage.removeItem("user");
}

const registerUser = async ({ username, name, password }: UserProps) => {
    return await axios.post(`${API_URL}`, {
        username, name, password
    });
}

export default {
    registerUser,
    loginUser,
    logoutUser
}