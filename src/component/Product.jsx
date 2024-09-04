import React from 'react'
import NavButton from './NavButton'

const Product = ({val, count, switchPos}) => {
    const details = val;
    
    return (
        <div  className='w-full h-[23rem] py-20 text-white'>
            <div  onMouseEnter={() => switchPos(count)} className='mx-auto max-w-screen-xl flex items-center justify-between'>
                <div>
                <h1 className='mb-10 text-4xl'>{details.title}</h1>
                <div>
                    {details.features.map((ele,index) =>
                    (
                        <><p key={index} className='capitalise'>{ele}</p></>
                    ))}
                </div>
                </div>
                <div className='dets w-1/3'>
                    <p className='mb-10'>
                    {details.description}
                    </p>
                    <div className='w-[80%] flex gap-10'>
                    {details.live && <NavButton title={"Live Website"}/>}
                    {details.case && <NavButton title={"Case Study"}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
