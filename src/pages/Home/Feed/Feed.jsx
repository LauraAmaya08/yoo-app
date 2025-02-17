import React from 'react'
import TopNav from '../../../components/Header/TopNav/TopNav'
import FeedCard from './FeedCard/FeedCard'

const Feed = () => {
    return (
        <>
            <div className="lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px-3 flex items-start gap-x-20">
                {/*Feed + seccion de historia*/}
                <div className="lg:w-[55%] md:w-full sm:w-full w-full h-auto relative">
                    <TopNav/>
                    <div className="w-full h-auto flex items-center justify-center mt-6">
                        <div className="lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto">
                            <FeedCard/>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden">

                </div>
            </div>
        </>
    )
}

export default Feed