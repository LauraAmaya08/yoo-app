import { logout } from "../../hook/logout";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");  
    };

    return handleLogout;
};

