import React from 'react'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'

export default function index() {
  return (
    <div className='max-w-sm max-h-full mb-[100px] mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px]'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
  )
}
