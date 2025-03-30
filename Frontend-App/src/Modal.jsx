import React, { useState } from 'react';
import classNames from 'classnames';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        photo: null,
        blogTitle: "",
        blogDescription: "",
    });

    const [validationErrors, setvalidationErrors] = useState({
        fullName: "",
        email: "",
        photo: "",
        blogTitle: "",
        blogDescription: "",
    });

    const [isButtonHidden, setIsButtonHidden] = useState(false);
    const [isButtonLoader, setIsButtonLoader] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        setvalidationErrors({
            fullName: "",
            email: "",
            photo: "",
            blogTitle: "",
            blogDescription: "",
        });

        let hasError = false;
        const newValidationErrors = { ...validationErrors };

        // valiadtion for name
        if (!formData.fullName.trim()) {
            newValidationErrors.fullName = "Name is required!";
            hasError = true;
        } else if (formData.fullName.trim().length > 20) {
            newValidationErrors.fullName = "Name must have at most 20 charcters!";
            hasError = true;
        }

        // valiadtion for email
        if (!formData.email.trim()) {
            newValidationErrors.email = "Email is required!";
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newValidationErrors.email = "Enter a valid email!"
            hasError = true;
        }

        // valiadtion for blog title
        if (!formData.blogTitle.trim()) {
            newValidationErrors.blogTitle = "Blog title is required!";
            hasError = true;
        }

        // valiadtion for blog descrition
        if (!formData.blogDescription.trim()) {
            newValidationErrors.blogDescription = "Blog description is required!";
            hasError = true;
        }

        // valiadtion for photo
        if (!formData.photo || formData.photo.length === 0) {
            newValidationErrors.photo = "Upload photo related to this blog!";
            hasError = true;
        } else {
            const file = formData.photo[0];
            const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
            const maxSize = 5 * 1024 * 1024; // 5 MB
    
            if (!allowedTypes.includes(file.type)) {
                newValidationErrors.photo = "Only JPG, JPEG, PNG files are allowed!";
                hasError = true;
            } else if (file.size > maxSize) {
                newValidationErrors.photo = "File size must be less than 5 MB!";
                hasError = true;
            } else {
                newValidationErrors.photo = '';
            }
        }

        // Update validation errors state
        setvalidationErrors(newValidationErrors);

        if (!hasError) {
            setIsButtonHidden(true);
            setIsButtonLoader(false);
            toast.success('Blog uploaded successfully!');
            console.log('Blog detail:', formData);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }

        if (hasError) {
            toast.error('Please fill required details!');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValidationErrors = { ...validationErrors };

        if (name === 'fullName') {
            if (!value.trim()) {
                newValidationErrors.fullName = 'Name is required!';
            } else if (value.trim().length > 20) {
                newValidationErrors.fullName = 'Name must have at most 20 charcters!';
            } else {
                newValidationErrors.fullName = '';
            }
        }

        if (name === 'email') {
            if (!value.trim()) {
                newValidationErrors.email = 'Email is required!';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                newValidationErrors.email = 'Enter a valid email!';
            } else {
                newValidationErrors.email = '';
            }
        }

        if (name === 'blogTitle') {
            if (!value.trim()) {
                newValidationErrors.blogTitle = 'Blog title is required!';
            } else {
                newValidationErrors.blogTitle = '';
            }
        }

        if (name === 'blogDescription') {
            if (!value.trim()) {
                newValidationErrors.blogDescription = 'Blog description is required!';
            } else {
                newValidationErrors.blogDescription = '';
            }
        }

        setFormData({
            ...formData,
            [name]: value,
        });

        // Update validation errors state
        setvalidationErrors(newValidationErrors);
    }

    const handleFileChange = (e) => {
        let newValidationErrors = { ...validationErrors };
        const { name, files } = e.target;
        const file = files[0];
        if (!file) {
            newValidationErrors.photo = 'Upload photo releted to this blog!';
        } else if (file) {
            const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
            const maxSize = 5 * 1024 * 1024; // 5 MB
            if (!allowedTypes.includes(file.type)) {
                newValidationErrors.photo = "Only JPG, JPEG, PNG files are allowed!";
            } else if (file.size > maxSize) {
                newValidationErrors.photo = "File size must be less than 5 MB!";
            } else {
                newValidationErrors.photo = '';
            }
        } else {
            newValidationErrors.photo = '';
        }

        setFormData({
            ...formData,
            [name]: files,
        });

        // Update validation errors state
        setvalidationErrors(newValidationErrors);
    }

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999">
            <div className="bg-white rounded-0 shadow shadow-sm shadow-white" data-aos="flip-up">
                <div className='flex justify-between items-center border-b pr-4 pl-4 pt-2 pb-2'>
                    <div>
                        <div className="text-md font-semibold">Create New Blog</div>
                    </div>
                    <div>
                        <i className="fa-solid fa-xmark cursor-pointer" onClick={onClose}></i>
                    </div>
                </div>
                <form action="#" method='POST' onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-4 overflow-auto' style={{ height: "400px" }}>
                        <div>
                            <label htmlFor="fullName" className="text-sm font-semibold mb-1">Full Name <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder='Enter your full name'
                                onChange={handleChange}
                                className={classNames(
                                    "w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-orange-300",
                                    { "shadow-red-300": validationErrors.fullName }
                                )}
                                id="fullName"
                            />
                            {validationErrors.fullName && (
                                <p className='error text-red-600 mt-1 text-xs'><i className="fa-solid fa-circle-info me-1 text-xs"></i>{validationErrors.fullName}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold mb-1">Email Id <span className='text-red-600'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder='Enter your email address'
                                className={classNames(
                                    "w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-orange-300",
                                    { "shadow-red-300": validationErrors.email }
                                )}
                                id="email"
                            />
                            {validationErrors.email && (
                                <p className='error text-red-600 mt-1 text-xs'><i className="fa-solid fa-circle-info me-1 text-xs"></i>{validationErrors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="photo" className="text-sm font-semibold mb-1">Photo <span className='text-red-600'>*</span></label>
                            <input
                                type="file"
                                name="photo"
                                onChange={handleFileChange}
                                className={classNames(
                                    "w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-orange-300",
                                    { "shadow-red-300": validationErrors.photo }
                                )}
                                id="photo"
                            />
                            {validationErrors.photo && (
                                <p className='error text-red-600 mt-1 text-xs'><i className="fa-solid fa-circle-info me-1 text-xs"></i>{validationErrors.photo}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="blogTitle" className="text-sm font-semibold mb-1">Blog Title <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="blogTitle"
                                onChange={handleChange}
                                placeholder='Enter blog title'
                                className={classNames(
                                    "w-full p-2 h-9 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-orange-300",
                                    { "shadow-red-300": validationErrors.blogTitle }
                                )}
                                id="blogTitle"
                            />
                            {validationErrors.blogTitle && (
                                <p className='error text-red-600 mt-1 text-xs'><i className="fa-solid fa-circle-info me-1 text-xs"></i>{validationErrors.blogTitle}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="blogDescription" className="text-sm font-semibold mb-1">Blog Description <span className='text-red-600'>*</span></label>
                            <textarea
                                name="blogDescription"
                                placeholder='Enter blog description'
                                onChange={handleChange}
                                className={classNames(
                                    "w-full p-2 border-0 rounded-0 shadow shadow-md appearance-none text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-orange-300",
                                    { "shadow-red-300": validationErrors.blogDescription }
                                )}
                                id="blogDescription"
                                cols="30"
                                rows="5">
                            </textarea>
                            {validationErrors.blogDescription && (
                                <p className='error text-red-600 mt-1 text-xs'><i className="fa-solid fa-circle-info me-1 text-xs"></i>{validationErrors.blogDescription}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end items-center p-2 gap-2 border-t">
                        <button type="reset" className="bg-gray-400 cursor-pointer text-white py-1 px-3 rounded-0 hover:bg-gray-500 font-semibold hover:shadow-md hover:shadow-gray-500">
                            <i className="ri-loop-left-line mr-2"></i>Reset
                        </button>
                        <button type="submit" className={classNames("bg-orange-400 cursor-pointer text-white py-1 px-3 rounded-0 hover:bg-orange-500 hover:shadow hover:shadow-md hover:shadow-orange-400 font-semibold",
                            { "hidden": isButtonHidden }
                        )}
                        >
                            <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>Upload
                        </button>
                        <button
                            className={classNames(
                                "bg-orange-300 cursor-pointer flex items-center text-white py-1 px-3 rounded-0 font-semibold",
                                { "hidden": isButtonLoader }
                            )}
                            disabled
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 animate-spin text-white">
                                <path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg><span className='text-white'>Loading....</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
