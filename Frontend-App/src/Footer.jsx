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
                    <div className="flex">
                        <div><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></div>
                        <div><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></div>
                        <div><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></div>
                        <div><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer