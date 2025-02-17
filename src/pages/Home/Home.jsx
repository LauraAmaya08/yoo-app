import {Routes,Route } from "react-router-dom";
import { NavBarComputer } from "../../components/Header/NavBarComputer/NavBarComputer";
import Feed from '../Home/Feed/Feed'
import Main from "../Profile/Main";

export const Home = () => {
    return (
        <>
        <div className='w-full min-h-screen'>
            <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
                {/*Navbar navegador */}
                <div className="lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
                    <NavBarComputer/>
                </div>
                {/*Navbar movil*/}
                {/*Feed y perfiles */}
                <Routes>
                    <Route path="" element={<Feed/>}/>
                    <Route path="/profile/me" element={<Main/>}/>
                </Routes>
            </div>
        </div>
        </>
    )
}