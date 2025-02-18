import { useState, useEffect } from "react";
import axios from "axios";

const Like = ({ publicacionId, usuarioId }) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchLikeStatus = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/api/v1/likes/status/${usuarioId}?publicacionId=${publicacionId}`,
              { withCredentials: true }
            );
            setLiked(response.data);
          } catch (error) {
            console.error("Error fetching like status:", error);
          }
        };
    
        fetchLikeStatus();
      }, [publicacionId, usuarioId]);

    const handleLike = async () => {
        try {
            if (liked) {
                await axios.delete(`http://localhost:8080/api/v1/likes/eliminar/${usuarioId}?publicacionId=${publicacionId}`, 
                    { withCredentials: true })
            } else {
                await axios.post(`http://localhost:8080/api/v1/likes/crear/${usuarioId}`, 
                    { publicacionId}, 
                    { withCredentials: true }
                );
            }
            setLiked(!liked);
        } catch (error) {
            console.error("Error al manejar el like:", error);
        }
    };
    

    return (
        <button onClick={handleLike} className={`text-sm ${liked ? "text-red-500" : "text-color"}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
            >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        </button>
    );
};

export default Like;
