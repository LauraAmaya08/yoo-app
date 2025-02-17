import React from 'react'
import {Link} from 'react-router-dom'

const ProfileNav = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between">
                <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
                    <img src="" alt="profileImg" className="w-12 h-12 rounded-full" />
                </Link>
                <div className="flex items-start gap-y-0 flex-col">
                    <p className="text-[0.9rem] text-white font-medium mb-0">
                        Music_Lover
                    </p>
                    <h6 className="text-[0.935rem] text-gray-500 font-normal">
                        Music Lover
                    </h6>
                </div>
            </div>
        </>
    )
}

export default ProfileNav