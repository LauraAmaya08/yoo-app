import { Link } from "react-router-dom"

const MobileProfile = () => {
    return (
        <>
            <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
                <div className="w-full h-auto flex items-center gap-x-8 justify-center mb-3">
                    <img src="" alt="" className="rounded-full w-20 h-20 object-cover" />
                    <div className="flex items-start flex-col gap-y-3">
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
                    </div>
                </div>
                <p className="text-base text-gray-100 font-normal">User</p>
                <p className="text-base text-gray-100 font-normal mb-10">
                    Jay Shree Ram <br/>
                    Profession Account <br/>
                    Profession Account <br/>
                    Profession Account <br/>
                    Profession Account <br/>
                    Profession Account <br/>
                </p>
                <div className="w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]">
                    <div className="flex items-center flex-col py-3">
                        <h6 className="text-base text-white font-medium mb-0">55</h6>
                        <p className="text-sm text-white font-thin">Posts</p>
                    </div>
                    <div className="flex items-center flex-col py-3">
                        <h6 className="text-base text-white font-medium mb-0">1200</h6>
                        <p className="text-sm text-white font-thin">Followers</p>
                    </div>
                    <div className="flex items-center flex-col py-3">
                        <h6 className="text-base text-white font-medium mb-0">100</h6>
                        <p className="text-sm text-white font-thin">Following</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileProfile