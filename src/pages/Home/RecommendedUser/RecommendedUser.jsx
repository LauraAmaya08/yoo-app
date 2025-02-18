import React from 'react'
import {Link} from 'react-router-dom'
import ProfileNav from './ProfileNav/ProfileNav'
import { Button } from '@material-tailwind/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const RecommendedUser = () => {
    const [user, setUser] = useState(null);
    const [usuariosNoSeguidos, setUsuariosNoSeguidos] = useState([])
    const [idSeguidor, setIdSeguidor] = useState(null);
    const [idSeguido, setIdSeguido] = useState(null);
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/seguimiento", {
            withCredentials: true 
        })
        .then(response => {
            setUser(response.data);
            setIdSeguidor(response.data.id);  
        })
        .catch(error => {
            console.error("Error al obtener los datos del usuario:", error);
            console.log(user)
        });
    }, []); 


    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/noSeguidos`, {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                const usuarios = Array.isArray(response.data) ? response.data : [];
                setUsuariosNoSeguidos(usuarios);
                console.log(usuarios); 
            })
            .catch(error => {
                console.error("Error al obtener los usuarios no seguidos:", error);
            });
        }
    }, [user, idSeguidor]);

    const handleSeguir = async (e, usuario) => {
        e.preventDefault();
        setIdSeguido(usuario.id); 

        if (!user || !user.id || !usuario || !usuario.id) {
            console.log("Falta información para realizar el seguimiento");
            return;
        }
        
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/seguimiento/${user.id}/seguir/${usuario.id}`, {}, { withCredentials: true });
            console.log("Seguimiento exitoso:", response.data);
            setUsuariosNoSeguidos(usuariosNoSeguidos.filter(user => user.id !== usuario.id));
        } catch (error) {
            console.log("Error al seguir al usuario:", error);
        }
    };

    return (
        <>
            <div className="w-full h-auto py-3">
                <ProfileNav/>
                <div className="w-full h-auto my-8">
                    <div className="w-full h-auto flex items-center justify-between mb-4">
                        <h6 className="text-sm text-gray-400 font-medium">
                            Suggested for you
                        </h6>
                        <Link to="/" className="text-xs font-semibold font-gray-300 hover:text-gray-600">
                            See All
                        </Link>
                    </div>
                    {usuariosNoSeguidos.map((usuario) => {
                        return (
                            <div key={usuario.id} className="w-full h-auto flex items-center justify-between mb-4">
                                <Link to="inicio/profile/me" className="w-full h-auto flex items-center gap-x-2">
                                    <img src={usuario.fotoPerfil} alt='Foto perfil' className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex items-start gap-y-0 flex-col">
                                        <p className="text-[0.9rem] font-medium mb-0">
                                            {usuario.nombreUser}
                                        </p>
                                        <h6 className="text-[0.935rem] text-gray-500 font-normal">
                                        {usuario.nombre}
                                        </h6>
                                    </div>
                                </Link>
                                <Button onClick={(e) => handleSeguir(e, usuario)} className="text-[0.8rem] text-blue-500 hover:text-gray-200">Follow</Button>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full h-auto">
                    
                    <p className="text-sm text-[#5b5b5b] font-normal">
                        &copy; 2025 YOO! FROM LAURA AMAYA
                    </p>
                </div>
            </div>
        </>
    )
}

export default RecommendedUser