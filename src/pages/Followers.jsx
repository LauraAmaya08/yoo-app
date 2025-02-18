import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavBarComputer } from '../components/Header/NavBarComputer/NavBarComputer'

export const Followers = () => {
    const [user, setUser] = useState(null);
    const [usuariosSeguidos, setUsuariosSeguidos] = useState([])

    
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/seguimiento", {
            withCredentials: true 
        })
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("Error al obtener los datos del usuario:", error);
        });
    }, []); 

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/seguidores`, {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                const usuarios = Array.isArray(response.data) ? response.data : [];
                setUsuariosSeguidos(usuarios);
                console.log(usuarios); 
            })
            .catch(error => {
                console.error("Error al obtener los usuarios no seguidos:", error);
            });
        }
    }, [user]);

    return (
        <>
            <div className="w-full h-auto py-3">
                <div className="w-full h-auto flex items-center justify-center lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
                    <div className="lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
                        <NavBarComputer />
                    </div>
                    <div className='w-full h-screen flex flex-col items-start justify-start mt-10'>
                    <h1 className='text-xl font-[Jost-Regular] mb-10'>Seguidores</h1>
                    {usuariosSeguidos.map((usuario) => {
                        return (
                            <div key={usuario.seguido.id} className="w-full h-auto flex items-center justify-evenly mb-4 ">
                                <Link to="inicio/profile/me" className="w-full h-auto flex items-center gap-x-2">
                                    <img src={usuario.seguido.fotoPerfil} alt='Foto perfil' className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex items-start gap-y-0 flex-col">
                                        <p className="text-[0.9rem] font-medium mb-0">
                                            {usuario.seguido.nombreUser}
                                        </p>
                                        <h6 className="text-[0.935rem] text-gray-500 font-normal">
                                        {usuario.seguido.nombre}
                                        </h6>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}