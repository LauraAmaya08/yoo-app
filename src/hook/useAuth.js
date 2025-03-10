import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080/auth",
    withCredentials: true,
});


export const validateToken = async () => {
    try {
        const response = await api.get("/validate"); 
        return response.status === 200;
    } catch (error) {
        return false;
    }
};


