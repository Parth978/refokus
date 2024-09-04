import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-72'>
            <div className='max-w-screen-xl mx-auto px-3 py-4 flex gap-32 items-center justify-between'>
                <div className='heading'>
                    <h1 className='text-[11.5rem] leading-none font-semibold tracking-tight'>refokus.</h1>
                </div>
                <div className='flex justify-between  gap-7'>

                <div className='basis-1/3 text-sm text-gray-500'>
                    <h1 className='mb-9'>Socials</h1>
                    {["Instagram", "Twitter", "LinkedIn"].map((ele) => {
                        return (
                            <a key={ele} href={`https://www.${ele}.com`} target="_blank"><h1  className='text-gray-500 hover:text-gray-100 my-2'>{ele}</h1></a>

                        )
                    })}
                </div>
                <div className='basis-1/3 text-sm text-gray-500'>
                    <h1 className='mb-9'>Socials</h1>
                    {["Instagram", "Twitter", "LinkedIn"].map((ele) => {
                        return (
                            <a key={ele} href={`https://www.${ele}.com`} target="_blank"><h1  className='text-gray-500 hover:text-gray-100 my-2'>{ele}</h1></a>

                        )
                    })}
                </div>
                <div className='flex flex-col justify-between text-sm fl py-4 gap-4 items-end'>
                    <p className='text-sm  text-gray-100 text-right pl-20'>Lorem ipsum dolor sit amet elit. Repellat nihil consequatur autem, veritatis enim vero! At, ab.</p>
                    <img className='w-52'src='https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp' alt='#'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
