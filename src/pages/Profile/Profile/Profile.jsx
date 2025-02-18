import {Link} from 'react-router-dom'
import {Posts} from './posts/Posts'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Profile = () => {
    const [user, setUser] = useState(null);
    const [numSeguidores, setNumSeguidores] = useState(0);
    const [numSeguidos, setNumSeguidos] = useState(0);
    
    
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

    useEffect(() => {
    if(user){
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/contarSeguidores`, {
                withCredentials: true
            })
            .then(response => {
                setNumSeguidores(response.data);
            })
            .catch(error => {
                console.error("Error al obtener los datos del usuario:", error);
            });
    }}, [user]);

    useEffect(() => {
        if(user){
                axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/contarSeguidos`, {
                    withCredentials: true
                })
                .then(response => {
                    setNumSeguidos(response.data);
                })
                .catch(error => {
                    console.error("Error al obtener los datos del usuario:", error);
                });
        }}, [user]);
    
    
    return (
        <>
            <div className="lg:w-[80%] md:w-[80%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
                <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
                    {user ? (
                        <>
                            <img 
                                src={user.fotoPerfil}
                                alt="Perfil icono"
                                className="rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover"
                            />
                            <div className="flex items-start flex-col">
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="flex items-center gap-x-2">
                                        <Link to="/actualizar" className="rounded-lg px-4 py-1.5 text-base font-[Jost-Regular] border border-gray-600 ease-aut duration-150">
                                            Edit Profile
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-6 mb-4">
                                    <h6 className="text-base font-normal">10 Posts</h6>
                                    <Link to="/seguidores" className="text-base font-normal">
                                        {numSeguidores} Seguidores
                                    </Link>
                                    <Link to="/seguidos" className="text-base font-normal">
                                        {numSeguidos} Seguidos
                                    </Link>
                                </div>
                                <p className="text-base font-[Jost-Regular]">{user.nombreUser}</p>
                                <p className="text-base font-[Jost-Light]">
                                    {user.nombre} <br />
                                    {user.biografia} <br />
                                </p>
                            </div>
                            
                        </>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
                    )}
                </div>
                {user && (
                    <div className="w-full h-auto">
                        <div className="mt-4 transition-opacity duration-300 ease-out opacity-100">
                        <Posts/>
                    </div>
    </div>
)}
            </div>
        </>
    );
};

export default Profile