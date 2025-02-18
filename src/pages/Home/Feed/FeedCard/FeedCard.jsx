import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ellipse from '../../../../components/icons/Ellipse';
import Comment from '../../../../components/icons/Comment';
import Like from '../../../../components/icons/Like';
import Emoji from '../../../../components/icons/Emoji';
import axios from 'axios';

const FeedCard = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [user, setUser] = useState(null);
    const [likes, setLikes] = useState({});
    const [comentarios, setComentarios] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/seguimiento", { withCredentials: true })
            .then(response => setUser(response.data))
            .catch(error => console.error("Error al obtener los datos del usuario:", error));
    }, []);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:8080/api/v1/seguimiento/${user.id}/publicaciones`, { withCredentials: true })
                .then(response => setPublicaciones(response.data))
                .catch(error => console.error("Error al obtener las publicaciones:", error));
        }
    }, [user]);

    const handleLikes = async (publicacionId) => {
        axios.get(`http://localhost:8080/api/v1/likes/${publicacionId}/publicaciones`, { withCredentials: true })
            .then(response => {
                setLikes(prevLikes => ({ ...prevLikes, [publicacionId]: response.data }));
            })
            .catch(error => console.error("Error al obtener los likes:", error));
    };

    const handleComments = async (publicacionId) => {
        axios.get(`http://localhost:8080/api/v1/comentarios/contar/${publicacionId}`, { withCredentials: true })
            .then(response => {
                setComentarios(prevComentarios => ({ ...prevComentarios, [publicacionId]: response.data }));
            })
            .catch(error => console.error("Error al obtener los comentarios:", error));
    };

    console.log(publicaciones)

    return (
        <>
            {publicaciones.filter(pub => typeof pub === "object").map((publicacion) => (
                <div key={publicacion.id} className="w-full h-auto mb-6">
                    {/* Header de la publicación */}
                    <div className="w-full h-auto flex items-center justify-between mb-2">
                        <div className="flex items-center gap-x-2">
                            <Link to="/profile" className="flex items-center justify-center flex-col flex-shrink-0">
                                <div className="w-10 h-10 rounded-full rounded-cover p-[2px]">
                                    <img src={publicacion.usuario?.fotoPerfil || "https://via.placeholder.com/50"} alt="Foto perfil" className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-x-2">
                                <p className="text-sm font-medium">{publicacion.usuario.nombreUser}</p>
                                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                <p className="text-sm font-medium">{publicacion.fecha}</p>
                            </div>
                        </div>
                        <Ellipse />
                    </div>

                    {/* Imagen o texto de la publicación */}                
                        {publicacion.imagen ? (
                            
                            <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3 flex items-center justify-center">
                            <img src={publicacion.imagen} alt="Imagen post" className="w-full h-full rounded object-center" />
                            </div>
                    ) : (
                        <div className="hidden">
                            <p className="text-xl font-bold text-center w-full h-full px-10">{publicacion.texto}</p>
                        </div>
                    )}

                    {/* Botones de interacción */}
                    <div className="w-full h-auto flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <button onClick={() => handleLikes(publicacion.id)}>
                                <Like />
                            </button>
                            <button onClick={() => handleComments(publicacion.id)}>
                                <Comment />
                            </button>
                        </div>
                    </div>

                    {/* Likes y comentarios */}
                    <Link to="/" className="w-full h-auto flex items-center gap-x-2 text-base font-medium my-2">
                        {likes[publicacion.id] || 0} likes
                    </Link>
                    <div className="w-full h-auto flex items-center gap-x-1">
                        <div className="w-full h-auto text-sm font-thin">
                            <Link to="/" className="font-medium text-sm me-1">
                                {publicacion.usuario.username}
                            </Link>
                            {publicacion.texto}
                        </div>
                    </div>
                    <Link to="/" className="text-gray.400 font-normal my-2">
                        View all {comentarios[publicacion.id] || 0} comments
                    </Link>

                    {/* Caja de comentarios */}
                    <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
                        <input type="text" className="w-full h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3" placeholder="Add a comment..." />
                        <Emoji />
                    </div>
                </div>
            ))}
        </>
    );
};

export default FeedCard;
