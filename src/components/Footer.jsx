import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*---------Left Section--------*/}
        <div >
        <img  className='mb-5 w-40' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>This website is designed to provide information and facilitate online doctor appointments. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your doctor for any health concerns</p>
        </div>
         {/*---------CenterSection--------*/}
         <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </li>
        </ul>
         </div>
          {/*---------Right Section--------*/}
          <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-012-456-7890</li>
                <li>sudeepvarma@gmail.com</li>
            </ul>
          </div>
      </div>
      <div>
        {/* -------- Copy Right -------------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
