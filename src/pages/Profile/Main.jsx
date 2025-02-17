import MobileProfile from './MobileProfile/MobileProfile'
import Profile from './Profile/Profile'

const Main = () => {
    return (
    <>
        <div className=" lg:w md:w- sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
            <Profile/>
            <MobileProfile/>
        </div>
    </>
    )
}

export default Main