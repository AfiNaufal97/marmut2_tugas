import React from 'react'
import Marmut from '../../../assets/image/marmut-detail.svg'
import Slic from '../slic/index'

export default function index() {
  return (
    <div>
         <div className='xl:hidden'>
          <img src={Marmut} alt="Gambar Detail" className='border-[20px] md:mx-auto md:w-[600px] md:h-full md:rounded-[30px]'/>
        </div>
        <div className='hidden xl:block xl:mb-[80px]'>
          <Slic />
        </div>
    </div>
  )
}
