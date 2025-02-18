import { NavBarComputer } from "../components/Header/NavBarComputer/NavBarComputer";
import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

export const UpdateUser = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [biografia, setBiografia] = useState("");
    const [fotoPerfil, setFotoPerfil] = useState("");
    const [user, setUser] = useState("")
    const [succes, setSucces] = useState("");

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

    const handleActualizar = async (e) => {
        e.preventDefault();

        const updateUser = { nombre, telefono, biografia, fotoPerfil };
        console.log("Actualizando usuario:", updateUser);

        try {
            console.log(user)
            const response = await axios.put(`http://localhost:8080/api/profile/${user.nombreUser}`, updateUser, {
                withCredentials: true,
            });
            setSucces('Perfil actualizado correctamente.');
            console.log("Perfil actualizado con éxito:", response.data);
        } catch (error) {
            console.error("Error en la actualización del perfil:", error.response?.data || error.message);
        }
    };

    return (
        <>
            <div className='w-full min-h-screen'>
                <div className="w-full h-auto flex items-center justify-center lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
                    <div className="lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
                        <NavBarComputer />
                    </div>
                    <section className='flex w-[60vw] h-screen overflow-auto scrollbar-none flex-col items-center justify-center space-y-10'>
                        <h1 className="text-center text-xl">Actualizar Perfil</h1>
                        <form className='flex flex-col w-full' onSubmit={handleActualizar}>
                            <section className='flex w-full'>
                                <div className='relative w-full space-y-5 mx-5'>
                                    <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <input type="text" id="txtNombre" placeholder="Nombre" value={nombre} className="bg-transparent border border-gray-600" onChange={(e) => setNombre(e.target.value)}/>
                                        </div>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <input type="tel" id="txtTelefono" placeholder="Teléfono" value={telefono} className="bg-transparent border border-gray-600" onChange={(e) => setTelefono(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <input type="text" id="txtBiografia" placeholder="Biografía" value={biografia} className="bg-transparent border border-gray-600" onChange={(e) => setBiografia(e.target.value)}/>
                                        </div>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <input type="text" id="txtFoto" placeholder="Foto de perfil" value={fotoPerfil} className="bg-transparent border border-gray-600" onChange={(e) => setFotoPerfil(e.target.value)}/>
                                        </div>
                                    </div>
                                    {succes && <p className="text-green-600 text-sm">{succes}</p>}
                                </div>
                            </section>
                            <div className='flex justify-center w-full mb-4 mt-9'>
                                <Button type='submit' className='w-full bg-[#0047AB]'>
                                    Actualizar Perfil
                                </Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};
