import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

function Navbar() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <header className="bg-black text-white pl-7 pr-7 fixed w-full z-99999" style={{ height: "60px" }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                <div className='flex justify-between items-center h-full'>
                    <div className='text-xl font-bold font-mono text-orange-400'>MyBlogs</div>
                    <div className='flex gap-5'>
                        <div className='cursor-pointer hover:text-orange-400 font-bold'><i className="fa-solid fa-house mr-1 text-sm"></i>Home</div>
                        <div className='cursor-pointer hover:text-orange-400 font-bold'><i className="fa-brands fa-blogger-b mr-1 text-md"></i>Blogs</div>
                    </div>
                    <div className='hidden'>
                        <i className="fa-solid fa-sliders"></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar