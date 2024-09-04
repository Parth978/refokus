import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Card = ({ width, start, para, hover }) => {
    return (
        <motion.div whileHover={{ padding:"25px", color:"black", backgroundColor:"white" }} className={`px-5 py-5 rounded-xl text-white bg-purple-700 ${width} min-h-[60vh] flex flex-col justify-between`}>
            <div>
                <div className='title flex items-center justify-between mb-10'>
                    <p>BLOG</p>
                    <FaArrowRightLong />
                </div>
                <div className='headline'>
                    <h3 className='text-3xl font-semibold'>News & Insights</h3>
                </div>
            </div>
            <div className='down'>
                {start && <div className="flex  justify-between"><p className='text-6xl font-semibold tracking-light leading-none'>Start a Project</p>
                    <button className='rounded-full px-5 py-2 border-[1px] border-white mt-5 mb-2'>Contact Us</button></div>}
                {para && <p className='w-[50%] text-sm font-regular'>Get insights and updates on branding,websites and growth.</p>}
            </div>
        </motion.div>
    )
}

export default Card;
