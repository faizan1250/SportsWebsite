"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import Nav from './Nav';
import Newsnav from './Newsnav';

const Sports = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
    const fetchapi = async () => {
        try {
            const response = await axios.get('http://localhost:5000/news?category=sports');
            const data = response.data;
            console.log('Fetched Data:', data);

            if (data && Array.isArray(data.data)) {
                setBlogs(data.data);
            } else {
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchapi();
},[])

    return (
        <>
         <motion.div 
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}>

        
        

           
            <div className='bg-white flex flex-row flex-wrap justify-evenly items-center mt-10'>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="m-4 p-4 border shadow-xl rounded-lg " 
                            style={{ height: "510px", width: "500px" }}
                        >
                            {/* Optional: Display Image */}
                            {blog.imageUrl && (
                                <img 
                                    src={blog.imageUrl} 
                                    alt={blog.title} 
                                    className="w-full h-52 object-cover mb-4 rounded"
                                />
                            )}
                            <h2 className='text-black text-xl font-bold mb-2'>{blog.title}</h2>
                            <p className='text-gray-700 text-base mb-2'>{blog.content}</p>
                            <a 
                                href={blog.readMoreUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                        
                    ))
                ) : (
                    <p className="text-gray-500 mt-10">No blogs available. Click the button to fetch sports news.</p>
                )}
                
            </div>
            </motion.div>
        </>
    );
};

export default Sports;
