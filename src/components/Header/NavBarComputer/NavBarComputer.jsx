import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/img/background/logo__2_-removebg-preview.png'
import Home from '../../../assets/img/darkIcons/home.png'
import Explorar from '../../../assets/img/darkIcons/direction.png'
import Notificacion from '../../../assets/img/darkIcons/notification.png'
import Crear from '../../../assets/img/darkIcons/add.png'
import CambiarModo from '../../../assets/img/darkIcons/toggle.png'
import LogoutButton from "../../logoutButton/logout";

export const NavBarComputer = () => {
    const navBarItems = [
        {
            name: "Explorar",
            link: '/explorar',
            icon: Explorar

        },
        {
            name: "Notificaciones",
            link: '/notificaciones',
            icon: Notificacion
        },
        {
            name: "Crear",
            link: '/crear',
            icon: Crear
        },
    ]
    return (
        <>
        <div className="w-full h-full relative">
            <Link className="mb-10 px-2 lg:block md:block sm:block block">
            <img src={Logo} alt='Logo' className="w-[140px] h-auto" />
            </Link>
            <div className="w-full h-auto flex items-start flex-col gap-y-12">
                <Link to="/inicio" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
                    <img src={Home} alt='Home icono' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
                    <p className="text-xl font-[Jost-Regular] text-white lg:block md:hidden sm:hidden hidden">
                    Home</p>
                </Link>
                {navBarItems.map((item) =>(
                <Link to={item.link} key={item.id}className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
                <img src={item.icon} alt='Explorar icono' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
                <p className="text-xl font-[Jost-Regular] text-white lg:block md:hidden sm:hidden hidden">
                {item.name}</p>
                </Link>)
                )}
                <Link to='/profile' className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
                <img src="https://picsum.photos/200" alt='Explorar icono' className="w-8 h-8 object-cover rounded-full group-hover:scale-105 ease-out duration-300" crossOrigin="anonymous"/>
                <p className="text-xl font-[Jost-Regular] text-white lg:block md:hidden sm:hidden hidden">
                Perfil</p>
                </Link>
            </div>
            <div className="w-full h-auto absolute bottom-0 left-0 px-0">
            <LogoutButton/>
            </div>
        </div>
        </>
    )
}