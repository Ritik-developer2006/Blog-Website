import React, { useState } from 'react';
import axios from 'axios';

const BlogModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999">
            <div className="bg-black text-white rounded-0 shadow shadow-sm shadow-white" data-aos="flip-up">
                <div className='flex justify-between items-center border-b pr-4 pl-4 pt-2 pb-2'>
                    <div>
                        <div className="text-md font-semibold">Create New Blog</div>
                    </div>
                    <div>
                        <i className="fa-solid fa-xmark cursor-pointer" onClick={onClose}></i>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-4 overflow-auto' style={{ height: "400px" }}>
            
                </div>
                <div className="flex justify-end items-center p-2 gap-2 border-t">
                    <button type="reset" className="bg-orange-400 cursor-pointer text-white text-xs py-1 px-3 rounded-0 hover:bg-orange-500 font-semibold hover:shadow-md">
                        <i className="fa-solid fa-xmark mr-1"></i>Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
