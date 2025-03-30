import { useState } from 'react'
import './App.css'

function Footer() {
    return (
        <>
            <footer className="bg-black text-white pl-5 pr-5" style={{ height: "50px" }}>
                <div className="flex justify-center sm:justify-between items-center h-full">
                    {/* <!-- copyright --> */}
                    <div className="">
                        <p>&copy; Copyright 2017 <a className="color" href="#">MyBlogs</a></p>
                    </div>
                    {/* <!-- social --> */}
                    <div className="hidden sm:flex md:flex gap-2">
                        <div><a href="#" target="_blank"><i className="ri-facebook-circle-fill text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-instagram-line text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-linkedin-fill text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i className="ri-github-fill text-lg"></i></a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer