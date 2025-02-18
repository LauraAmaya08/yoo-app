import React from 'react'
import instagramFeed from '../FeedData.jsx/FeedData'
import {Link} from 'react-router-dom'
import Ellipse from  '../../../../components/icons/Ellipse'
import Comment from  '../../../../components/icons/Comment'
import Like from  '../../../../components/icons/Like'
import Save from  '../../../../components/icons/Save'
import Share from  '../../../../components/icons/Share'
import Emoji from  '../../../../components/icons/Emoji'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FeedCard = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [user, setUser] = useState();

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
            axios.get(`http://localhost:8080/api/v1/publicaciones/`, {
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
            {instagramFeed.map((feed) => {
                return(
                <div key={feed.id} className="w-full h-auto mb-6">
                    <div className="w-full h-auto flex items-center justify-between mb-2">
                        <div className="flex items-center gap-x-2">
                            <Link to="/" className="flex items-center justify-center flex-col flex-shrink-0">
                                <div className="w-10 h-10 rounded-full rounded-cover p-[2px]">
                                    <img src={feed.profileImg} alt={feed.profileImg} className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-x-2">
                                <p className=" text-sm font-medium">{feed.username}</p>
                                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                <p className=" text-sm font-medium">{feed.time}</p>
                            </div>
                        </div>
                        <Ellipse/>
                    </div>
                    <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
                        <img src={feed.postImg} alt={feed.caption} className="w-full h-full rounded object-center" />
                    </div>
                    <div className="w-full h-auto flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <Like />
                            <Comment />
                            <Share />
                        </div>
                        <Save />
                    </div>
                    <Link to="/" className="w-full h-auto flex items-center gap-x-2 text-base font-medium my-2">
                        <div className="flex items-center">
                            <img src={feed.mutualFrndImg1} alt={feed.likeCount} className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black" />
                            <img src={feed.mutualFrndImg2} alt={feed.likeCount} className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3" />
                        </div>
                        {feed.likeCount} likes
                    </Link>
                    <div className="w-full h-auto flex items-center gap-x-1">
                        <div className="w-full h-auto text-sm font-thin">
                            <Link to="/" className=" font-medium text-sm me-1">
                                {feed.username}
                            </Link>
                            {feed.caption}
                            <Link to="/" className="text-gray-400 text-sm ms-1">
                                more
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className="text-gray.400 font-normal my-2">
                        View all {feed.commentCount} comments
                    </Link>
                    <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
                        <input type="text" className="w- h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3" placeholder="Add a comment..." />
                        <Emoji/>
                    </div>
                </div>);
            })}
        </>
    )
}

export default FeedCard