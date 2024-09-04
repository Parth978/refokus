import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
    <div className='max-w-screen-xl mx-auto py-2 flex gap-5'>
    <Card  width={"basis-1/3"} start={false} para={true}/>
    <Card  width={"basis-2/3"} start={true} para={false} hover={"bg-slate-100"}/>
    </div>
    </div>
  )
}

export default Cards
