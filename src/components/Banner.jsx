import React from 'react'
import Image1 from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'

const Banner = () => {
  return (
    <div className='flex text-white space-x-8  h-78 p-4'>
       <div className='bg-red-500 w-full rounded-2xl overflow-hidden'>
       <img src={Image1} alt=""  className='w-full h-full bg-cover' />
       </div>
       <div className='bg-red-500 w-full rounded-2xl overflow-hidden'>
        <img src={Image2} alt=""  className='w-full h-full bg-cover' />
       </div>
    </div>
  )
}

export default Banner