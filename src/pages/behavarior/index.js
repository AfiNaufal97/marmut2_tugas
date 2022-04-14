import React from 'react'
import Section1 from './section1/index'
import Section2 from './section2/index'
import Section3 from './section3/index'
import Section4 from './section4/index'
import Section5 from './section5/index'

export default function index() {
  return (
    <div className='my-[30px] max-w-sm mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px]'>
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       <Section5 />
    </div>
  )
}
