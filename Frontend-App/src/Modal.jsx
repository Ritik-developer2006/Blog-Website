import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999999">
            <div className="bg-white rounded-lg w-100">
                <div className='flex justify-between items-center border-b pr-4 pl-4 pt-2 pb-2'>
                    <div>
                        <div className="text-md font-semibold">Create New Blog</div>
                    </div>
                    <div>
                        <i class="fa-solid fa-xmark cursor-pointer" onClick={onClose}></i>
                    </div>
                </div>
                <p className="text-gray-700 mb-6">This is a simple modal with Tailwind CSS!</p>
                <div className="flex justify-end items-center border-t pr-4 pl-4 pt-2 pb-2 gap-2">
                    <button onClick={onClose} className="bg-gray-500 cursor-pointer text-white py-1 px-3 rounded-md hover:bg-black focus:outline-none font-semibold">
                        <i class="fa-solid fa-xmark mr-2"></i>Cancel
                    </button>
                    <button onClick={onClose} className="bg-green-500 cursor-pointer text-white py-1 px-3 rounded-md hover:bg-black focus:outline-none font-semibold">
                    <i class="fa-solid fa-arrow-up-from-bracket mr-2"></i>Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
