import React from 'react'
import {Link} from "react-router-dom"
import AppLogo from "../../../assets/img/background/logo__2_-removebg-preview.png"

const TopNav = () => {
    return (
        <>
            <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block">
                <div className="w-full h-auto flex items-center justify-between">
                    <Link>
                        <img src={AppLogo} alt="App Logo" className="w-28 h-auto object-contain" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopNav