import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      {/* Contact Us Header */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      {/* Contact Details Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        {/* Contact Image */}
        <img
          className='w-full md:max-w-[360px]'
          src={assets.contact_image}
          alt='Contact Us'
        />

        {/* Office Details */}
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Vijayawada Office */}
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>
            KL University<br />
            Greenfields, Vaddeswaram<br />
            Guntur District, Vijayawada, Andhra Pradesh, India<br />
            PIN: 522502
          </p>
          <p className='text-gray-500'>
            Tel: (+91) 98765 43210
            <br />
            Email: contact@prescripto.in
          </p>

          {/* Careers Section */}
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
