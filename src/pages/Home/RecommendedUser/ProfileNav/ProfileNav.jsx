import React from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import useTheme from '../../../../hook/useTheme';

const ProfileNav = () => {
    const [user, setUser] = useState(null);
    

    useEffect(() => {
        axios.get("http://localhost:8080/api/profile", {
            withCredentials: true
        })
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("Error al obtener los datos del usuario:", error);
        });
    }, []);

    const { theme } = useTheme(); 
    const isDarkMode = theme === "dark"
    
    return (
        <>
            <div className="w-full h-auto flex items-center justify-start">
                {user ? (
                <Link to="/profile/me" className="w-full h-auto flex items-center gap-x-2">
                    <img src={user.fotoPerfil} alt="profileImg" className="w-12 h-12 rounded-full" crossOrigin="anonymous" />
                    <div className='flex flex-col'>
                    <p className="text-[0.9rem] font-medium mb-0">
                    {user.username}
                    </p>
                    <h6 className="text-[0.935rem] text-gray-500 font-normal">
                    {user.nombre}
                    </h6>
                    </div>
                </Link>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
                )}
            </div>
        </>
    )
}

export default ProfileNav