import React from 'react';
import { FaUser, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import RegisterImg from "../../../assets/images/loginimg.png";
import LogO from "../../../assets/images/Logo.png";
import avatar from "../../../assets/images/avatar.png";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl relative">

        {/* Ask Diyor between sections */}
        <div className="flex md:flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-10 z-10">
          <img src={avatar} alt="Avatar" className="hidden md:block w-12 h-12 rounded-full mb-2" />
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-5 md:p-12 bg-white">
          <div className="flex justify-between items-start mb-10">
            <img src={LogO} alt="Logo" className="h-10 md:h-12 cursor-pointer" onClick={() => navigate('/')} />
            <p className="text-base text-gray-600 text-[12px]">
              Questions? <span className="text-teal-500 font-semibold cursor-pointer">Ask Diyor</span>
            </p>
          </div>

          <h2 className="text-6xl font-black text-black mb-10">Get started</h2>
          <form className="space-y-6">
            <div className="relative">
              <FaUser className="absolute top-3.5 left-3.5 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3.5 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="relative">
              <FaGlobe className="absolute top-3.5 left-3.5 text-gray-400 text-xl" />
              <select
                className="w-full border border-gray-300 rounded-xl px-5 py-3 pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none bg-white"
                required
              >
                <option value="">Select country</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Turkmenistan">Turkmenistan</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#01B98E] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#019b7b] transition duration-300"
            >
              Continue
            </button>
          </form>
          <p className="mt-6 text-base text-gray-500 text-center cursor-pointer" onClick={() => navigate('/login')}>
            Already have an account? Sign in
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-1/2 bg-[#01B98E] flex items-center rounded-3xl justify-center p-12">
          <div className="text-white text-center max-w-lg">
            <img
              src={RegisterImg}
              alt="Illustration"
              className="mb-8 mx-auto max-w-[340px]"
            />
            <p className="text-2xl font-semibold leading-snug">
              Welcome to Al Muamalat – <br /> Empowering Your Journey in <br /> Islamic Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}