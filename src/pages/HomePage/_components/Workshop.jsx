import React from 'react';
import { useState } from 'react';

const Workshop = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="max-w-6xl xl:max-w-7xl m-auto mt-10 flex flex-col rounded-lg bg-white overflow-hidden p-3 xl:p-0">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 bg-[#FAE9D3] w-full md:w-3/5 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-[27px] md:text-[32px] leading-[100%] tracking-[0%] font-inter text-[#D28527]">
              Workshops and Spiritual Development
            </h2>
            <p className="text-[#D28527] font-inter font-medium text-[16px] md:text-[20px] leading-[32px] tracking-[0%] mt-2">
              Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="w-[35px] h-[10px] bg-green-700 rounded-full mr-2"></div>
            <div className="w-[10px] h-[10px] bg-gray-300 rounded-full mr-1"></div>
            <div className="w-[10px] h-[10px] bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="p-6 bg-[#F9F7F3] w-full md:w-2/5">
          <h2 className="font-inter font-medium text-[22px] leading-[32px] tracking-[0%] text-[#152032] mb-4">
            Free consultation
          </h2>
          <p className="text-[#152032] font-inter font-medium text-[16px] leading-[20px] tracking-[0%] mb-6">
            Leave your phone number, and we will reach out to provide you with complete information about our courses.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <div className="flex">
                <select
                  className="w-20 px-3 py-2 border border-gray-300 rounded-l-md bg-white focus:outline-none"
                  defaultValue="+44"
                >
                  <option value="+44">+44 🇬🇧</option>
                  <option value="+1">+1 🇺🇸</option>
                  <option value="+90">+90 🇹🇷</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 w-4 px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-md focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex items-start">
              <input
                id="agreement"
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="agreement" className="ml-3 block text-sm text-gray-700">
                I agree to the use of my personal information for consultation purposes.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#009688] hover:bg-[#26A69A] text-white font-medium py-2 px-4 rounded-md cursor-pointer"
            >
              Submit
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Workshop;