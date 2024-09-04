import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {
    const [pos, setPos] = useState(0);

    const switchPos = (val) => {
        setPos(val * 23);
    }
    var products = [{
        title: "Cula",
        features: ["Web Design", "Webflow Development", "Creative Development", "3D Animations"],
        description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        video: "/Videos/summon-43.webm",
        live: true,
        case: true
    },
    {
        "title": "BCG Platinion",
        "features": ["Strategy", "Web Design", "Webflow Development", "Creative Development"],
        "description": "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
        "video": "/Videos/brightwave-43.webm",
        "live": true,
        "case": true
    },
    {
        "title": "Arqitel",
        "features": ["Web Design", "Webflow Development", "Creative Development", "3D Animations"],
        "description": "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
        "video": "/Videos/candid-43.webm",
        "live": true,
        "case": true
    },
    {
        "title": "Sevdesk",
        "features": ["Strategy", "Webflow Development"],
        "description": "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
        "video": "/Videos/rainfall-43.webm",
        "live": true,
        "case": true
    },
    {
        "title": "Layout Land",
        "features": ["Strategy", "Web Design", "Webflow Development", "Creative Development"],
        "description": "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
        "video": "/Videos/intenseye-43.webm",
        "live": true,
        "case": true
    },
    {
        "title": "Singularity",
        "features": ["Web Design", "Webflow Development", "Creative Development", "3D Animations"],
        "description": "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
        "video": "/Videos/jungle-43.webm",
        "live": true,
        "case": true
    },
    {
        "title": "Brightwave",
        "features": ["Branding", "Creative Development", "Strategy", "Web Design", "Webflow Development"],
        "description": "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
        "video": "/Videos/kablamo-43.webm",
        "live": true,
        "case": true
    },
    ]
    return (
        <div className='mt-32 relative'>
            {
                products.map((ele, index) => (
                    <Product count={index} val={ele} switchPos={switchPos} />
                ))
            }
            <div className='absolute top-0 w-full h-full  pointer-events-none'>
                <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + `rem` }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }} className='absolute w-[30rem] h-[23rem] bg-blue-50 left-[44%]  overflow-hidden rounded-xl'>
                    {products.map((ele, index) => (
                        <motion.div key={index} animate={{ y: -pos + `rem` }} className='w-full h-full bg-slate-400'>
                            <video autoPlay loop muted className='w-full h-full object-cover'>
                                <source src={ele.video} type="video/webm" />
                            </video>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Products
