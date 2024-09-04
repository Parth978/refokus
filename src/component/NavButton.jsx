import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const NavButton = ({title = "Get Started"}) => {
  return (
    <div className='w-40 px-4 py-2 rounded-full bg-zinc-100 text-black flex items-center justify-between'>
      <span className='text-sm font-medium'>{title}</span>
      <FaChevronRight />
    </div>
  )
}

export default NavButton
