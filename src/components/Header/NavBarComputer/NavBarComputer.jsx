import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/img/background/logo__2_-removebg-preview.png'
import LogoDark from '../../../assets/img/background/logo.png'
import { useLogout } from "../../logoutButton/logout"; 

import HomeLight from '../../../assets/img/lightIcons/home.png'
import HomeDark from '../../../assets/img/darkIcons/home.png'

import ExplorarLight from '../../../assets/img/lightIcons/direction.png'
import ExplorarDark from '../../../assets/img/darkIcons/direction.png'

import NotificacionLight from '../../../assets/img/lightIcons/notification.png'
import NotificacionDark from '../../../assets/img/darkIcons/notification.png'

import CrearLight from '../../../assets/img/lightIcons/add.png'
import CrearDark from '../../../assets/img/darkIcons/add.png'

import CambiarModoLight from '../../../assets/img/lightIcons/toggle.png'
import CambiarModoDark from '../../../assets/img/darkIcons/toggle.png'
import useTheme from "../../../hook/useTheme";

import Cerrar from '../../../assets/img/darkIcons/logout.png'
import LightIcon from '../../../assets/img/lightIcons/logout.png'; 

export const NavBarComputer = () => {
    const { theme, toggleTheme } = useTheme(); 
    const isDarkMode = theme === "dark"
    const handleLogout = useLogout();
    const navBarItems = [
        {
            name: "Explorar",
            link: '/explorar',
            lightIcon: ExplorarLight,
            darkIcon: ExplorarDark

        },
        {
            name: "Notificaciones",
            link: '/notificaciones',
            lightIcon: NotificacionLight,
            darkIcon: NotificacionDark
        },
        {
            name: "Crear",
            link: '/crear',
            lightIcon: CrearLight,
            darkIcon: CrearDark
        },
    ]
    return (
        <>
        <div className="w-full h-full relative">
            <Link className="mb-10 px-2 lg:block md:block sm:block block">
            <img src={isDarkMode ? Logo : LogoDark} alt='Logo' className="w-[140px] h-auto" />
            </Link>
            <div className="w-full h-auto flex items-start flex-col gap-y-12">
                <Link to="/inicio" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent rounded-md ease-out duration-500 group hover-link">
                    <img src={isDarkMode ? HomeDark : HomeLight} alt='Home icono' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
                    <p className="text-xl font-[Jost-Regular] lg:block md:hidden sm:hidden hidden">
                    Home</p>
                </Link>
                {navBarItems.map((item,index) =>(
                <Link to={item.link} key={index} className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent rounded-md ease-out duration-500 group hover-link">
                <img src={isDarkMode ? item.darkIcon : item.lightIcon} alt={`${item.name} icono`} className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
                <p className="text-xl font-[Jost-Regular] lg:block md:hidden sm:hidden hidden">
                {item.name}</p>
                </Link>)
                )}
                <Link to='/profile' className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent rounded-md ease-out duration-500 group hover-link">
                <img src="https://picsum.photos/200" alt='Explorar icono' className="w-8 h-8 object-cover rounded-full group-hover:scale-105 ease-out duration-300" crossOrigin="anonymous"/>
                <p className="text-xl font-[Jost-Regular] lg:block md:hidden sm:hidden hidden">
                Perfil</p>
                </Link>
            </div>
            <div className="w-full h-auto absolute bottom-0 left-0 px-0">
            <button
            onClick={toggleTheme}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent rounded-md ease-out duration-500 mb-5">
            <img src={isDarkMode ? CambiarModoDark : CambiarModoLight} alt='Cambiar modo icon' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
            <p className="text-xl font-[Jost-Regular]">Cambiar Modo</p>
            </button>
            <button
            onClick={handleLogout}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent rounded-md ease-out duration-500 mb-5">
            <img src={isDarkMode ? Cerrar : LightIcon} alt='Cambiar modo icon' className="w-8 h-8 object-contain group-hover:scale-105 ease-out duration-300" />
            <p className="text-xl font-[Jost-Regular]">Cerrar Sesión</p>
            </button>
            </div>
        </div>
        </>
    )
}