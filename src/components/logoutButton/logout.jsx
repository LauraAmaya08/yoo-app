import { logout } from "../../hook/logout";
import { useNavigate } from "react-router-dom";
import Cerrar from '../../assets/img/darkIcons/logout.png'

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/"); 
    };

    return (
        <button
            onClick={handleLogout}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-red-700 text-white rounded-md ease-out duration-500">
            <img src={Cerrar} alt='Cerrar icono' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
            <p className="text-xl font-[Jost-Regular]">Cerrar Sesión</p>
        </button>
    );
};

export default LogoutButton;