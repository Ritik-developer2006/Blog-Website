import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from './Modal'
import './App.css'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div id="home" className="banner-layout">
                <div className="banner-overlay"></div>
                <div className="main-banner">
                    <div className="banner-content relative flex flex-col justify-center items-center p-7" style={{ height: "100vh" }}>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-orange-400 text-center' data-aos="zoom-in"><span className='text-4xl sm:text-5xl md:text-6xl font-normal text-white'>Hello, I'm</span> Ritik Kumar</h1>
                        <h2 data-aos="flip-left" className="type-line typing text-center text-white text-md sm:text-xl md:text-3xl mt-5">
                            Welcome to
                            <span className="type-wrap text-orange-400 pl-2 pr-2">
                                <span className="is-active font-medium">MyBlog</span>
                            </span>
                            Website
                        </h2>
                        <div className='flex flex-row gap-5 mt-5'>
                            <button onClick={openModal} data-aos="fade-right" type="button" className="group cursor-pointer relative flex items-center justify-center border border-black overflow-hidden rounded-0 bg-orange-400 px-3 py-2 md:px-5 md:py-2 font-medium text-neutral-200 hover:shadow hover:shadow-md hover:shadow-orange-300 hover:border-0">
                                <span className='flex justify-center items-center'>
                                    <i className="fa-solid fa-plus mr-1 text-xs md:text-sm"></i>
                                    <span className="text-xs md:text-sm">New Blog</span>
                                </span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                            </button>
                            <Link to="/blogs">
                                <button data-aos="fade-left" type="button" className="group cursor-pointer relative inline-flex items-center justify-center overflow-hidden border border-orange-400 rounded-0 px-3 py-2 md:px-5 md:py-2 bg-black font-medium text-neutral-200 hover:shadow hover:shadow-md hover:shadow-black hover:border-0">
                                    <span className='flex justify-center items-center'>
                                        <i className="fa-solid fa-square-rss mr-2 text-xs md:text-sm"></i>
                                        <span className="text-xs md:text-sm">My Blogs</span>
                                    </span>
                                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                        <div className="relative h-full w-8 bg-white/20"></div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default Home
