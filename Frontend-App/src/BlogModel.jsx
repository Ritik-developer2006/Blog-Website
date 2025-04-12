import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const BlogModal = ({ isOpen, onClose, blog }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blogDetails, setBlogDetails] = useState(blog);

    useEffect(() => {
        if (!isOpen || !blog?.id) return;

        const fetchBlogDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/blogs/api/v1/blogs/${blog.id}/`);
                if (response.status === 200) {
                    setBlogDetails(response.data);
                    setError(null);
                }
            } catch (err) {
                setError('Failed to load blog details');
            } finally {
                setLoading(false);
            }
        };

        setBlogDetails(null); // Reset before loading new
        fetchBlogDetails();

    }, [isOpen, blog?.id]);


    if (!isOpen) return null;  // Don't render if modal is closed

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999 p-7">
            <div className="bg-black text-white rounded-0 shadow shadow-sm w-2xl shadow-white" data-aos="flip-up">
                <div className='flex justify-between items-center border-b pr-4 pl-4 pt-2 pb-2'>
                    <div>
                        <div className="text-md font-semibold">Blog Detail</div>
                    </div>
                    <div>
                        <i className="fa-solid fa-xmark cursor-pointer" onClick={onClose}></i>
                    </div>
                </div>
                <div className="p-4">
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>{error}</div>
                    ) : blogDetails ? (
                        <>
                            <div>
                                <div className="text-lg text-orange-400 font-semibold mb-3">{blogDetails.blogTitle}</div>
                            </div>
                            <div className='grid grid-cols-4 gap-4'>
                                <div>
                                    <img src={blogDetails.photo ? (blogDetails.photo) : "https://docs.material-tailwind.com/img/team-3.jpg"} alt="Blog" style={{ height: "150px", width: "500px" }} />
                                </div>
                                <div className='col-span-3 flex flex-col justify-between gap-4 p-0 m-0'>
                                    <div className="text-md p-0" style={{marginTop: "-7px"}}>{blogDetails.blogDescription}</div>
                                    <div className='flex justify-between'>
                                        <div className='text-xs text-gray-400 font-semibold uppercase'>
                                           <span className='text-xs text-gray-400'>Post By :- </span> {blogDetails.fullName}
                                        </div>
                                        <div className='text-xs text-gray-400 uppercase font-semibold'>
                                            {moment(blogDetails.createdAt).fromNow().replace(/^in /, '')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>No blog details available</div>
                    )}
                </div>

                <div className="flex justify-end items-center p-2 gap-2 border-t">
                    <button
                        type="button"
                        className="bg-orange-400 cursor-pointer text-white text-xs py-1 px-3 rounded-0 hover:bg-orange-500 font-semibold hover:shadow-md"
                        onClick={onClose}
                    >
                        <i className="fa-solid fa-xmark mr-1"></i>Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
