import React from 'react'
import Marmut from '../../../assets/image/marmut1.svg' 

export default function index() {
  return (
    <div className='lg:hidden'>
        <img src={Marmut} alt="Gambar" className='w-50 h-60 mx-auto md:w-[550px] md:h-[450px]'/>
    </div>
  )
}
