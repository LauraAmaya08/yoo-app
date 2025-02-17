import {Link} from 'react-router-dom'
import Posts from './posts/Posts'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = () => {
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
    
    return (
        <>
            <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
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
                                        <button className="rounded-lg px-4 py-1.5 text-base font-normal ease-aut duration-150">
                                            Edit Profile
                                        </button>
                                        <button className="rounded-lg px-4 py-1.5 text-base font-normal ease-aut duration-150">
                                            View Archive
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-6 mb-4">
                                    <h6 className="text-base font-normal">10 Posts</h6>
                                    <Link to="/" className="text-base font-normal">
                                        1200 Followers
                                    </Link>
                                    <Link to="/" className="text-base font-normal">
                                        100 Following
                                    </Link>
                                </div>
                                <p className="text-base font-normal">{user.nombreUser}</p>
                                <p className="text-base font-normal">
                                    Jay Shree Ram <br />
                                    Profession Account <br />
                                    Profession Account <br />
                                    Profession Account <br />
                                    Profession Account <br />
                                    Profession Account <br />
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
                            <Posts />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile