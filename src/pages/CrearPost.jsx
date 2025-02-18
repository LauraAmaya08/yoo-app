import { NavBarComputer } from "../components/Header/NavBarComputer/NavBarComputer";
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

export const CrearPost = ({ user }) => {
    const [texto, setTexto] = useState('');
    const [imagen, setImagen] = useState('');
    const [etiquetas, setEtiquetas] = useState([]);
    const [succes, setSucces] = useState('');
    const [errors, setErrors] = useState({});

    // Manejar el cambio de etiquetas
    const handleEtiquetasChange = (e) => {
        const etiquetasString = e.target.value;
        const etiquetasArray = etiquetasString.split(" ").map(etiqueta => etiqueta.trim()).filter(Boolean);
        setEtiquetas(etiquetasArray);
    };

    const handleCrearPost = async (e) => {
        e.preventDefault();

        const textoError = validarTexto(texto);
        const imagenError = validarImagen(imagen);
        const etiquetasError = validarEtiquetas(etiquetas);

        if (textoError || imagenError || etiquetasError) {
            setErrors({ texto: textoError, imagen: imagenError, etiquetas: etiquetasError });
            return;
        }

        const newPost = { texto, imagen, etiquetas, user };
        console.log("Creando publicación:", newPost);

        try {
            const response = await axios.post("http://localhost:8080/api/v1/publicaciones", newPost, {
                withCredentials: true,
            });
            setSucces('Publicación creada correctamente.');
            console.log("Publicación exitosa:", response.data);
        } catch (error) {
            console.error("Error en la creación de publicación:", error.response?.data || error.message);
        }
    };

    const validarTexto = (texto) => {
        if (!texto || texto.length < 5) {
            return "El texto es obligatorio y debe tener al menos 5 caracteres.";
        } else if (texto.length > 500) {
            return "El texto no puede exceder los 500 caracteres.";
        }
        return "";
    };

    const validarImagen = (imagen) => {
        if (imagen && !/^https?:\/\/\S+\.\S+/.test(imagen)) {
            return "La URL de la imagen no es válida.";
        }
        return "";
    };

    const validarEtiquetas = (etiquetas) => {
        if (etiquetas.length > 0 && !etiquetas.every(etiqueta => /^#\w+$/.test(etiqueta))) {
            return "Las etiquetas deben estar en el formato: #Etiqueta1 #Etiqueta2.";
        }
        return "";
    };

    return (
        <>
            <div className='w-full min-h-screen'>
                <div className="w-full h-auto flex items-center justify-center lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
                    <div className="lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
                        <NavBarComputer />
                    </div>
                    <section className='flex w-[60vw] h-screen overflow-auto scrollbar-none flex-col items-center justify-center space-y-10'>
                        <h1 className="text-center text-xl">Crear Publicación</h1>
                        <form className='flex flex-col w-full' onSubmit={handleCrearPost}>
                            <section className='flex flex-col w-full'>
                                <div className='w-full mb-5'>
                                    <textarea
                                        type='text'
                                        id='idTextPubli'
                                        value={texto}
                                        onChange={(e) => setTexto(e.target.value)}
                                        required
                                        className='flex w-full h-[40vh] bg-transparent p-4 border rounded-lg items-start justify-start text-start'
                                        placeholder='¿Qué quieres compartir?'
                                    />
                                    {errors.texto && <p className="text-red-600 text-sm mt-1">{errors.texto}</p>}
                                </div>

                                <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                    <div className='w-[100%] lg:w-[45%]'>
                                        <input
                                            type='text'
                                            id='idImagen'
                                            value={imagen}
                                            onChange={(e) => setImagen(e.target.value)}
                                            className='w-full h-[3.8rem] bg-transparent p-4 border rounded-lg'
                                            placeholder='Agregar enlace de imagen (opcional)'
                                        />
                                        {errors.imagen && <p className="text-red-600 text-sm mt-1">{errors.imagen}</p>}
                                    </div>
                                    <div className='w-[100%] lg:w-[45%]'>
                                        <input
                                            type='text'
                                            id='idEtiquetas'
                                            value={etiquetas.join(" ")} 
                                            onChange={handleEtiquetasChange}
                                            className='w-full h-[3.8rem] bg-transparent p-4 border rounded-lg'
                                            placeholder='Agregar etiquetas (opcional)'
                                        />
                                        {errors.etiquetas && <p className="text-red-600 text-sm mt-1">{errors.etiquetas}</p>}
                                    </div>
                                </div>
                                {succes && <p className="text-green-600 text-sm mt-3">{succes}</p>}
                            </section>
                            <div className='flex justify-center w-full mb-4 mt-9'>
                                <Button type='submit' className='w-full bg-[#0047AB]'>
                                    Crear Post
                                </Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};
