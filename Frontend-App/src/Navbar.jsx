import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
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

    const [isNavbar, setisNavbar] = useState(false);
    const toggleNavbar = () => {
        setisNavbar(!isNavbar);
    };

    return (
        <>
            <header className="bg-black text-white pl-5 pr-5 fixed w-full z-9" style={{ height: "60px" }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                <div className='flex justify-between items-center h-full'>
                    <div className='text-xl font-bold font-mono text-orange-400'>MyBlogs</div>
                    <div className='hidden sm:flex gap-5'>
                        <div className='cursor-pointer hover:text-orange-400 font-medium'>
                            <Link to="/">
                                <i className="fa-solid fa-house mr-1 text-sm"></i>Home
                            </Link>
                        </div>
                        <div className='cursor-pointer hover:text-orange-400 font-medium'>
                            <Link to="/blogs">
                                <i className="fa-brands fa-blogger-b mr-1 text-md"></i>Blogs
                            </Link>
                        </div>
                    </div>
                    <div className='flex sm:hidden'>
                        <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
                    </div>
                </div>
                <div
                    className={classNames(
                        "bg-black absolute sm:hidden right-0 top-0 p-5 pt-4",
                        { "navbar-show": isNavbar, "navbar-hide": !isNavbar }
                    )}
                    style={{ width: "160px", height: "100vh" }}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='text-orange-400 font-mono font-bold text-xl'>MB</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-xmark text-xl" onClick={toggleNavbar}></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-between h-full pt-3">
                        <div className='flex flex-col gap-1'>
                            <div className='cursor-pointer hover:text-orange-400 font-medium'>
                                <Link to="/">
                                    <i className="fa-solid fa-house mr-1 text-sm"></i>Home
                                </Link>
                            </div>
                            <div className='cursor-pointer hover:text-orange-400 font-medium'>
                                <Link to="/blogs">
                                    <i className="fa-brands fa-blogger-b mr-1 text-md"></i>Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="flex-fill flex justify-between pb-3">
                            <div><a href="#" target="_blank"><i className="ri-facebook-circle-fill text-lg"></i></a></div>
                            <div><a href="#" target="_blank"><i className="ri-instagram-line text-lg"></i></a></div>
                            <div><a href="#" target="_blank"><i className="ri-linkedin-fill text-lg"></i></a></div>
                            <div><a href="#" target="_blank"><i className="ri-github-fill text-lg"></i></a></div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar