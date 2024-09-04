import { motion } from 'framer-motion'
import React from 'react'

const Marquee = (props) => {
  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div initial={{ x: props.direction === 'left' ? 0 : '-100%' }} animate={{ x: props.direction === 'left' ? '-100%' : '0%' }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className='flex flex-shrink-0 py-8 gap-40 mr-40'>
        {props.val.map((ele, index) => (
          <img key={index} className="w-32 flex-shrink-0" src={ele} />
        ))}
      </motion.div>
      <motion.div initial={{ x: props.direction === 'left' ? 0 : '-100%' }} animate={{ x: props.direction === 'left' ? '-100%' : '0%' }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className='flex flex-shrink-0 py-8 gap-40 mr-40'>
        {props.val.map((ele, index) => (
          <img key={index} className="w-32 flex-shrink-0" src={ele} />
        ))}
      </motion.div>

    </div>
  )
}

export default Marquee
