import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Assuming user is initially logged in

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/">
            HOME
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors">
            ALL DOCTORS
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            ABOUT
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            CONTACT
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-grey-600 z-20 hidden group-hover:block ${showMenu ? 'hidden' : 'block'}`}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('my-profile')} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate('my-appointments')} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowMenu(!showMenu)} // Toggle showMenu state
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-10 ${showMenu ? 'block' : 'hidden'}`}
          onClick={() => setShowMenu(false)} // Close menu on background click
        ></div>

        <div
          className={`fixed top-0 right-0 w-80 bg-white p-4 z-20 transform transition-transform duration-300 ease-in-out ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink to="/" onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded-full inline-block">HOME</p>
            </NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded-full inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>
            </NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
