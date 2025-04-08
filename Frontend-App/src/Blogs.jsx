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
        setSelectedBlog(blog);
        setIsBlogModalOpen(true);
    };

    const closeBlogModal = () => {
        setIsBlogModalOpen(false);
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

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
                <div className="relative p-7 min-h-screen pt-24">
                    <div className="blog-container relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>{error}</div>
                        ) : blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <div key={blog.id} className="border hover:shadow hover:shadow-lg cursor-pointer border-gray-200 p-2">
                                    <div>
                                        <div className="overflow-hidden">
                                            <img className="h-50 w-100 object-cover transition duration-500 ease-in-out hover:brightness-50 hover:scale-125" src={blog.imageUrl || "https://docs.material-tailwind.com/img/team-3.jpg"} alt="profile-picture" />
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-end pt-0 text-gray-500 font-semibold uppercase'>
                                                <small className='hover:text-orange-400 text-xs'>{blog.fullName}</small>
                                            </div>
                                            <div className='text-end pt-0 text-gray-500 font-semibold'>
                                                <small className='text-xs hover:text-orange-400'>{moment(blog.createdAt).fromNow().replace(/^in /, '')} Ago</small>
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
                                                onClick={() => openBlogModal(blog)} 
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
                            ))
                        ) : (
                            <div className='text-white'>No blogs available</div>
                        )}
                    </div>
                </div>
            </div>
            <BlogModal isOpen={isBlogModalOpen} onClose={closeBlogModal} blog={selectedBlog} />
        </>
    );
}

export default Blog;
