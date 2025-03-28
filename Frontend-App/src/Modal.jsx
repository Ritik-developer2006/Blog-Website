import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999999">
            <div className="bg-white rounded-0 shadow shadow-sm shadow-white w-2xl" data-aos="flip-up">
                <div className='flex justify-between items-center border-b pr-4 pl-4 pt-2 pb-2'>
                    <div>
                        <div className="text-md font-semibold">Create New Blog</div>
                    </div>
                    <div>
                        <i className="fa-solid fa-xmark cursor-pointer" onClick={onClose}></i>
                    </div>
                </div>
                <div className='p-4'>
                    <form action="">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="fullName" className="text-sm font-semibold mb-1">Full Name <span className='text-red-600'>*</span></label>
                                <input type="text" placeholder='Enter your full name' className="w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-blue-300" id="fullName" name="fullName" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-semibold mb-1">Email Id <span className='text-red-600'>*</span></label>
                                <input type="email" placeholder='Enter your email address' className="w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-blue-300" id="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="photo" className="text-sm font-semibold mb-1">Photo <span className='text-red-600'>*</span></label>
                                <input type="file"  accept="image/jpg, image/png, image/jpeg" className="w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-blue-300" id="photo" name="photo" />
                            </div>
                            <div>
                                <label htmlFor="blogTitle" className="text-sm font-semibold mb-1">Blog Title <span className='text-red-600'>*</span></label>
                                <input type="text" placeholder='Enter blog title' className="w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-blue-300" id="blogTitle" name="blogTitle" />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="blogDescription" className="text-sm font-semibold mb-1">Blog Description <span className='text-red-600'>*</span></label>
                                <textarea name="blogDescription" placeholder='Enter blog description' className='w-full p-2 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-blue-300' id="blogDescription" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end items-center border-t pr-4 pl-4 pt-2 pb-2 gap-2">
                    <button onClick={onClose} className="bg-gray-400 cursor-pointer text-white py-1 px-3 rounded-0 hover:bg-gray-500 font-semibold">
                        <i className="fa-solid fa-xmark mr-2"></i>Cancel
                    </button>
                    <button className="bg-blue-400 cursor-pointer text-white py-1 px-3 rounded-0 hover:bg-blue-500 font-semibold">
                        <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
