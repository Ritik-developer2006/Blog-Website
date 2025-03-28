import { useState } from 'react'
import './App.css'

function Footer() {
    return (
        <>
            <footer className="bg-black text-white pl-7 pr-7" style={{ height: "50px" }}>
                <div className="flex justify-between items-center h-full">
                    {/* <!-- copyright --> */}
                    <div className="">
                        <p>&copy; Copyright 2017 <a className="color" href="#">MyBlogs</a></p>
                    </div>
                    {/* <!-- social --> */}
                    <div className="flex gap-2">
                        <div><a href="#" target="_blank"><i class="ri-facebook-circle-fill text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i class="ri-instagram-line text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i class="ri-linkedin-fill text-lg"></i></a></div>
                        <div><a href="#" target="_blank"><i class="ri-github-fill text-lg"></i></a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer