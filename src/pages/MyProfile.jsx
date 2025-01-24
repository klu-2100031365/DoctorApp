import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Assuming assets holds image paths

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Arjun Satya",
    image: assets.profile_pic, // Assuming assets.profile_pic is an image path
    email: 'arjunsatya@gmail.com',
    phone: '+91 123 456 7890',
    address: {
      line1: "57th Road, One Town ",
      line2: "Vijayawada- AP,India"
    },
    gender: 'Male',
    dob: '01-11-2003'
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (event, field) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: event.target.value
    }));
  };

  const handleAddressChange = (event, field) => {
    setUserData(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: event.target.value
      }
    }));
  };

  return (
    <div className='max-w-lg flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {isEdit ? (
        <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
          type="text"
          value={userData.name}
          onChange={(event) => handleInputChange(event, 'name')}
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      )}
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={userData.phone}
              onChange={(event) => handleInputChange(event, 'phone')}
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}
          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <div>
              <input
                className='bg-gray-50'
                type="text"
                value={userData.address.line1}
                onChange={(event) => handleAddressChange(event, 'line1')}
              />
              <br />
              <input
                className='bg-gray-50'
                type="text"
                value={userData.address.line2}
                onChange={(event) => handleAddressChange(event, 'line2')}
              />
            </div>
          ) : (
            <p className='text-gray-500'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select
              className='max-w-20'
              value={userData.gender}
              onChange={(event) => handleInputChange(event, 'gender')}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* Add other gender options if needed */}
            </select>
          ) : (
            <p className='text-gray-400'>{userData.gender}</p>
          )}
          <p className='font-medium'>Birthday:</p>
          {isEdit ? (
            <input
              className='max-w-28 bg-gray-100'
              type="date"
              value={userData.dob}
              onChange={(event) => handleInputChange(event, 'dob')} 
            />
          ) : (
            <p className='text-gray-400'>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className='mt-10'>
        {isEdit ? (
          <button 
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' 
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button 
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' 
            onClick={() => setIsEdit(true)} 
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;