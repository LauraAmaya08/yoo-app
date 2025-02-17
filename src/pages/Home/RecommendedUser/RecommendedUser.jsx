import React from 'react'
import {Link} from 'react-router-dom'
import ProfileNav from './ProfileNav/ProfileNav'
import recommendUserData from './RecommendedUserData'
import axios from 'axios'
import { useState, useEffect } from 'react'

const RecommendedUser = () => {
    const [user, setUser] = useState(null);
    const [usuariosNoSeguidos, setUsuariosNoSeguidos] = useState([])
    
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
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/noSeguidos`, {
                withCredentials: true
            })
            .then(response => {
                setUsuariosNoSeguidos(response.data);  
            })
            .catch(error => {
                console.error("Error al obtener los usuarios no seguidos:", error);
            });
        }
    }, [user]);

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
                                <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
                                    <img src={usuario.fotoPerfil} alt='Foto perfil' className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex items-start gap-y-0 flex-col">
                                        <p className="text-[0.9rem] font-medium mb-0">
                                            {usuario.nombreUser}
                                        </p>
                                        <h6 className="text-xs text-gray-500 font-normal">Suggested for you</h6>
                                    </div>
                                </Link>
                                <Link to="/" className="text-[0.8rem] text-blue-500 hover:text-gray-200">Follow
                                </Link>
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