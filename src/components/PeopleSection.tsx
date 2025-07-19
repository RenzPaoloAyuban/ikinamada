import React from 'react'
import AnimatedTestimonialsDemo from './ui/animated-testimonials-demo'
import { div } from 'motion/react-client'

const PeopleSection = () => {

  return (
   
    <div className="w-full h-200 flex flex-col items-center justify-center overflow-hidden gap-20">
        <div className='text-black font-bold text-5xl'>
          People behind Ikinamada
        </div>
        <AnimatedTestimonialsDemo />
    </div>
  )
}

export default PeopleSection