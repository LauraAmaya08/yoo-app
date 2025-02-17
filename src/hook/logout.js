import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/auth",
    withCredentials: true,
});

export const logout = async () => {
    try {
        await api.post("/logout"); 
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};
