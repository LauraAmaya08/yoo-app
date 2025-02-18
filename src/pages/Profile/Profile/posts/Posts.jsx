import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Posts = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [user, setUser] = useState();

    /*useEffect(() => {
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
            axios.get(`http://localhost:8080/api/v1/publicaciones/userPublic/${user.id}`, {
                withCredentials: true
            })
            .then(response => {
                setPublicaciones(response.data);
            })
            .catch(error => {
                console.error("Error al obtener las publicaciones:", error);
            });
    }}, [user]);

    

    return (
        <>
            <div className="w-full h-auto flex items-center gap-1 flex-wrap">
                    {publicaciones.map((publicacion) => {
                        console.log(publicacion.imagen)
                        return (
                            <div key={publicacion.id}>
                                <Link to="inicio" className="w-[200px] h-[200px] bg-cover bg-center" style={publicacion.imagen ? { backgroundImage: `url(${publicacion.imagen})` } : {}}>
                                {publicacion.texto}
                                </Link>
                            </div>
                        )
                    })}
            </div>
        </>
    )*/
}
