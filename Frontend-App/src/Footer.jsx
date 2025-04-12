import { useState } from 'react'
import './App.css'

function Footer() {
    return (
        <>
            <footer className="bg-black text-white pl-5 pr-5" style={{ height: "50px" }}>
                <div className="flex justify-center sm:justify-between items-center h-full">
                    {/* <!-- copyright --> */}
                    <div className="">
                        <p>&copy; Copyright {new Date().getFullYear()} <a className="text-orange-500" href="#">MyBlogs</a></p>
                    </div>
                    {/* <!-- social --> */}
                    <div className="hidden sm:flex md:flex gap-2">
                        <div><a href="#" target="_blank"><i className="ri-facebook-circle-fill hover:text-orange-500 text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-instagram-line hover:text-orange-500 text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-linkedin-fill hover:text-orange-500 text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-github-fill hover:text-orange-500 text-lg"></i></a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer