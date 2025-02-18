import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavBarComputer } from '../components/Header/NavBarComputer/NavBarComputer'
import { Button } from '@material-tailwind/react'

export const Followes = () => {
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
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/seguidos`, {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                const usuarios = Array.isArray(response.data) ? response.data : [];
                setUsuariosSeguidos(usuarios);
            })
            .catch(error => {
                console.error("Error al obtener los usuarios no seguidos:", error);
            });
        }
    }, [user]);

        const handleDejarSeguir = async (e, usuario) => {
            e.preventDefault();
            
            try {
                console.log(`http://localhost:8080/api/v1/seguimiento/${user.id}/dejarSeguir/${usuario.id}`)
                await axios.delete(`http://localhost:8080/api/v1/seguimiento/${user.id}/dejarSeguir/${usuario.seguido.id}`, {
                    withCredentials: true
                });
                setUsuariosSeguidos(usuariosSeguidos.filter(u => u.seguido.id !== usuario.seguido.id));
                console.log("Usuario dejado de seguir exitosamente.");
            } catch (error) {
                console.log("Error al dejar de seguir al usuario:", error);
                alert("Hubo un error al intentar dejar de seguir al usuario.");
    
                setUsuariosSeguidos(usuariosSeguidos);
            }
        };

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
                            <div key={usuario.seguido.id} className="w-[50%] h-auto flex items-center justify-between mb-4 ">
                                <Link to="inicio/profile/me" className="h-auto flex items-center gap-x-2">
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
                                <Button onClick={(e) => handleDejarSeguir(e, usuario)} className="text-[0.8rem] text-blue-500 hover:text-gray-200">Unfollow</Button>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}