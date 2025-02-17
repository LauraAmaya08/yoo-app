import {Link} from 'react-router-dom'
import Settings from '../../../components/icons/Settings'
import Posts from './posts/Posts'

const Profile = () => {
    return (
        <>
            <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
                <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
                    <img src="" alt="" className="rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover" />
                    <div className="flex items-start flex-col">
                        <div className="flex items-center gap-x-5 mb-4">
                            <Link to="/profile" className="text-lg text-gray-200 font-normal">
                                user
                            </Link>
                            <div className="flex items-center gap-x-2">
                                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-aut duration-150">
                                    Edit Profile
                                </button>
                                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-aut duration-150">
                                    View Archive
                                </button>
                            </div>
                            <Settings/>
                        </div>
                        <div className="flex items-center gap-x-6 mb-4">
                            <h6 className="text-base text-gray-100 font-normal">10 Post</h6>
                            <Link to="/" className="text-base text-gray-100 font-normal">
                                1200 Followers
                            </Link>
                            <Link to="/" className="text-base text-gray-100 font-normal">
                                100 Following
                            </Link>
                        </div>
                        <p className="text-base text-gray-100 font-normal">User</p>
                        <p className="text-base text-gray-100 font-normal">
                            Jay Shree Ram <br/>
                            Profession Account <br/>
                            Profession Account <br/>
                            Profession Account <br/>
                            Profession Account <br/>
                            Profession Account <br/>
                        </p>
                        
                    </div>

                </div>
                <div className="w-full h-auto">
                    {/*<div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
                        <Tab
                            label="POSTS"
                            icon={PostIcon}
                        />
                    </div>*/}
                    <div className="mt-4 transition-opacity duration-300 ease-out opacity-100">
                        <Posts/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile