import React from 'react'

const Stripe = (props) => {
  return (
    <div className='w-[16.66%] px-5 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-slate-100 flex items-center justify-between mt-20'>
        <span><img src={props.val.url} alt='' /></span>
        <span className='font-bold'>{props.val.number}</span>  
    </div>
  )
}

export default Stripe
