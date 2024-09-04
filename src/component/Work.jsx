import React, { useState } from 'react'
import {motion, useScroll} from 'framer-motion'

const Work = () => {
    const [images, setImages] = useState([
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5b41e4c40f758df5ecf_Remind%20-%204%203.webp",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d66b3b5bc5130805f1d3_Weglot%20Like%20Magic%20-%204%203.webp",
            top: "45%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203.webp",
            top: "60%",
            left: "60%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5b41e4c40f758df5ecf_Remind%20-%204%203.webp",
            top: "63%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7a279ee50e826cd2264_Jungle%20-%204%203.webp",
            top: "70%",
            left: "55%",
            isActive: false,
        },
    ])
    const { scrollYProgress } = useScroll();

    function displayImages(arr){
        setImages(prev => (
            prev.map((image,index) => (
                arr.indexOf(index) === -1 ?
                {...image, isActive : false} : 
                {...image, isActive : true}
             ) )
        ))
        console.log(images);
        
    }

    scrollYProgress.on('change' , (length) => {
        switch(Math.floor(length * 100)){
            case 0:
                displayImages([]);
                break
            case 1:
                displayImages([0]);
                break
            case 2:
                displayImages([0,1]);
                break
            case 4:
                displayImages([0,1,2]);
                break
            case 6:
                displayImages([0,2,3,4]);
                break
            case 7:
                displayImages([0,3,4,5]);
                break
        }
        
    })
    
    return (
        <div className='w-full mt-20'>
            <div className='max-w-screen-xl mx-auto text-center relative'>
                <h1 className='text-[30vw] leading-none tracking-tight font-medium select-none'>work</h1>
                <div className='top-0 absolute w-full h-full'>
                    {images.map(ele => (
                      ele.isActive && <img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={ele.url} style={{ top: ele.top , left: ele.left}} alt='' />
                    ))}
                </div>
            </div>
        </div>
    )
} 

export default Work
