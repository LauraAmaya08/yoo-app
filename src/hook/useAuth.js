import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8080/auth/validate", {
                    credentials: "include", 
                });

                if (!response.ok) {
                    throw new Error("Token inválido");
                }
            } catch (error) {
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);

    return loading;
};

export default useAuth;

