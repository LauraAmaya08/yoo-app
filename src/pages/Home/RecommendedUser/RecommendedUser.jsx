import React from 'react'
import {Link} from 'react-router-dom'
import ProfileNav from './ProfileNav/ProfileNav'
import recommendUserData from './RecommendedUserData'

const RecommendedUser = () => {
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
                    {recommendUserData.map((user) => {
                        return (
                            <div key={user.id} className="w-full h-auto flex items-center justify-between mb-4">
                                <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
                                    <img src={user.profileImg} alt={user.username} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex items-start gap-y-0 flex-col">
                                        <p className="text-[0.9rem] text-white font-medium mb-0">
                                            {user.username}
                                        </p>
                                        <h6 className="text-xs text-gray-500 font-normal">Suggested for you</h6>
                                    </div>
                                </Link>
                                <Link to="/" className="text-[0.8rem] text-blue-500 hover:text-gray-200">
                                    {user.follow}
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