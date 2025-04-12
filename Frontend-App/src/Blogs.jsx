import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import classNames from 'classnames';
import BlogModal from './BlogModel.jsx';
import './App.css';

function Blog() {
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isButtonHidden, setIsButtonHidden] = useState(false);
    const [isButtonLoader, setIsButtonLoader] = useState(true);

    const openBlogModal = (blog) => {
        setSelectedBlog(blog);  // Set selected blog object
        setIsBlogModalOpen(true);  // Open modal
    };

    const closeBlogModal = () => {
        setIsBlogModalOpen(false);
    };

    const myLoader = () => {
        setIsButtonHidden(true);
        setIsButtonLoader(false);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/blogs/api/v1/blogs/');
                if (response.status === 200) {
                    setBlogs(response.data);
                }
            } catch (err) {
                setError('Something went wrong. Please try again!');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <div id="home" className="">
                <div className="p-7 min-h-screen flex justify-center pt-23">
                    {loading ? (
                        <div className='flex items-center'>
                            <div className="w-full me-2 place-items-center overflow-hidden rounded-lg">
                                <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    width="40" height="40">
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                    </path>
                                </svg>
                            </div>
                            <div className='text-xl font-semibold'>
                                Loading...
                            </div>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center h-40 sm:h-64 bg-gray-100 rounded-md shadow-md p-7 sm:p-20">
                            <div className="text-xl sm:text-6xl font-extrabold text-orange-500 mb-1">OOPS!</div>
                            <div className="text-sm sm:text-lg font-medium text-gray-600">Something was wrong. Try again!</div>
                            <div className='flex'>
                                <button type="button"
                                    className={classNames("group cursor-pointer flex items-center justify-center overflow-hidden border border-orange-400 rounded-0 px-3 py-2 md:px-5 md:py-2 bg-black font-medium text-neutral-200 hover:shadow hover:shadow-md hover:shadow-black hover:border-0 mt-2",
                                        { "hidden": isButtonHidden }
                                    )}
                                    onClick={myLoader}>
                                    <span className='flex justify-center items-center'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-white">
                                            <path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-xs md:text-sm">Reload Window</span>
                                    </span>
                                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                        <div className="relative h-full w-8 bg-white/20"></div>
                                    </div>
                                </button>
                                <button
                                    className={classNames(
                                        "group flex items-center justify-center overflow-hidden border border-orange-400 rounded-0 px-3 py-2 md:px-5 md:py-2 bg-black font-medium text-neutral-200 mt-2",
                                        { "hidden": isButtonLoader }
                                    )}
                                    disabled
                                >
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 animate-spin text-white">
                                        <path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg><span className='text-white'>Loading....</span>
                                </button>
                            </div>
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="blog-container relative grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="border hover:shadow hover:shadow-lg cursor-pointer border-gray-200 p-2">
                                    <div>
                                        <div className="overflow-hidden border border-gray-200">
                                            <img className="h-50 w-100 object-cover transition duration-500 ease-in-out hover:brightness-50 hover:scale-125" src={blog.photo || "https://docs.material-tailwind.com/img/team-3.jpg"} alt="profile-picture" />
                                        </div>
                                        <div className='flex flex-col sm:flex-row justify-start sm:justify-between'>
                                            <div className='text-start pt-0 text-gray-500 uppercase'>
                                                <small className='hover:text-orange-400 text-xs font-semibold'>{blog.fullName}</small>
                                            </div>
                                            <div className='pt-0 text-gray-500 font-semibold'>
                                                <small className='text-xs hover:text-orange-400 uppercase'>{moment(blog.createdAt).fromNow().replace(/^in /, '')}</small>
                                            </div>
                                        </div>
                                        <div className="pt-0 text-start mt-1">
                                            <div className="text-md mt-1 font-semibold text-slate-900 hover:text-orange-400 line-clamp-1">
                                                {blog.blogTitle}
                                            </div>
                                            <div className="text-gray-400 font-semibold mt-1 font-light line-clamp-2">
                                                <small className='text-xs'>{blog.blogDescription}</small>
                                            </div>
                                        </div>
                                        <div className="flex justify-start pt-2 gap-7">
                                            <button
                                                type="button"
                                                onClick={() => openBlogModal(blog)} // Pass the full blog object
                                                className="group cursor-pointer relative flex items-center justify-center border border-gray-300 overflow-hidden rounded-0 bg-orange-400 px-2 py-1 font-medium text-neutral-200 hover:shadow hover:shadow-md hover:shadow-orange-300 hover:border-sm hover:border-black"
                                            >
                                                <span className='flex justify-center items-center'>
                                                    <span className="text-xs">Read More</span>
                                                </span>
                                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                                    <div className="relative h-full w-8 bg-white/20"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-40 sm:h-64 bg-gray-100 rounded-md shadow-md p-7 sm:p-20">
                            <div className="text-xl sm:text-6xl font-extrabold text-orange-500 mb-1">OOPS!</div>
                            <div className="text-sm sm:text-lg font-medium text-gray-600">No blogs available</div>
                            <div><Link to="/" className='text-xs sm:text-sm font-bold hover:text-orange-400'>
                                Create Blog<i className="fa-solid fa-arrow-right ms-1"></i>
                            </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <BlogModal isOpen={isBlogModalOpen} onClose={closeBlogModal} blog={selectedBlog} />
        </>
    );
}

export default Blog;
