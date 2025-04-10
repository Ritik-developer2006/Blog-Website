import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from "aos";
import moment from 'moment';
import BlogModal from './BlogModel.jsx';
import './App.css';

function Blog() {
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const openBlogModal = (blog) => {
        setSelectedBlog(blog);  // Set selected blog object
        setIsBlogModalOpen(true);  // Open modal
    };

    const closeBlogModal = () => {
        setIsBlogModalOpen(false);
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
            <div id="home" className="banner-layout">
                <div className="p-7 min-h-screen pt-24 flex justify-center items-center">
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
                        <div>{error}</div>
                    ) : blogs.length > 0 ? (
                        <div className="blog-container relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="border hover:shadow hover:shadow-lg cursor-pointer border-gray-200 p-2">
                                    <div>
                                        <div className="overflow-hidden">
                                            <img className="h-50 w-100 object-cover transition duration-500 ease-in-out hover:brightness-50 hover:scale-125" src={blog.photo || "https://docs.material-tailwind.com/img/team-3.jpg"} alt="profile-picture" />
                                        </div>
                                        <div className='flex flex-col sm:flex-row justify-start sm:justify-between'>
                                            <div className='text-start pt-0 text-gray-500 font-semibold uppercase'>
                                                <small className='hover:text-orange-400 text-xs'>{blog.fullName}</small>
                                            </div>
                                            <div className='pt-0 text-gray-500 font-semibold'>
                                                <small className='text-xs hover:text-orange-400'>{moment(blog.createdAt).fromNow().replace(/^in /, '')}</small>
                                            </div>
                                        </div>
                                        <div className="pt-0 text-start mt-1">
                                            <div className="text-md mt-1 font-semibold text-slate-900 hover:text-orange-400">
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
                                                className="group cursor-pointer relative flex items-center justify-center border border-gray-300 overflow-hidden rounded-0 bg-orange-400 px-2 py-1 font-medium text-neutral-200 hover:shadow hover:shadow-md hover:shadow-orange-300 hover:border-0"
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
                        <div className='text-white'>No blogs available</div>
                    )}
                </div>
            </div>
            <BlogModal isOpen={isBlogModalOpen} onClose={closeBlogModal} blog={selectedBlog} />
        </>
    );
}

export default Blog;
