import React from 'react';
import Footerlogo from "../assets/images/flogo.png";
import { FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="mt-5 flex flex-col bg-teal-600 text-white">
      {/* Header */}
      <header className="py-4 px-6">
        <img src={Footerlogo} alt="Footer Logo" className="m-auto max-w-[150px] md:max-w-[200px]" />
      </header>

      {/* Navigation */}
      <nav className="py-4 px-6">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-14 justify-center">
          <li className="hover:text-gray-600  cursor-pointer text-center">Home</li>
          <li className="hover:text-gray-600 cursor-pointer text-center">About</li>
          <li className="hover:text-gray-600 cursor-pointer text-center">Service</li>
          <li className="hover:text-gray-600 cursor-pointer text-center">Contact Us</li>
        </ul>
      </nav>

      {/* Main content would go here */}
      <main className="flex-grow p-6">
        {/* Your main content would be placed here */}
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <Link to="https://telegram.com" className="text-xl"><FaTelegramPlane className='text-xl text-[24px] hover:text-[#0088cc] transition duration-300 ease-in-out' /></Link>
          <Link to="https://instagram.com" className="text-xl"><FaInstagram className='text-xl text-[24px]  hover:text-pink-500 transition duration-300 ease-in-out' /></Link>
          <Link to="https://twitter.com" className="text-xl"><FaTwitter className='text-xl text-[24px]  hover:text-[#1DA1F2] transition duration-300 ease-in-out' /></Link>
        </div>
        <hr className="border-gray-300 my-2 max-w-7xl mx-auto" />
        <p className="text-sm">Copyright Satyam Studio</p>
      </footer>
    </div>
  );
};

export default Footer;