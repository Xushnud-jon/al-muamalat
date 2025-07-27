import React from 'react';
import tick from '../../../../assets/images/Vector.png';
import greenImg from '../../../../assets/images/yashilnuqta.png'
const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-4 md:p-6 xl:p-8 gap-0 md:gap-0">
      {/* Left Section - Our Services */}
      <div className="w-full md:w-1/2 bg-teal-600 text-white p-6 xl:p-22 rounded-lg shadow-lg flex flex-col gap-10 md:gap-15">
        <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em] align-middle mb-4 ">Our Services</h2>
        <div className="space-y-6">
          <div className=''>
            <img src={tick} alt="Space Icon" className="inline-block  " />
            <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em] ml-2  align-middle'>Space for creative ideas</span>
            <div className="pl-6 mt-2 ml-2">
          
              <span className=' font-medium text-[14px] md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em] align-middle'>Cyber Square nourishes young aspiring minds to get a clear vision of their future. We guide them in analyzing and building their vision and ideas into reality.</span>
            </div>
          </div>
          <div>
            <img src={tick} alt="Engage Icon" className="inline-block " />
            <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em] text-center ml-2 align-middle'>Engaging and fun curriculum</span>
            <div className="pl-6 mt-2 ml-2">
             
              <span className=' font-medium text-[14px]  md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em] align-middle'>Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts on their own. With Cyber Square kids have fun while they learn without frustration.</span>
            </div>
          </div>
          <div>
            <img src={tick} alt="Professional Icon" className="inline-block " />
            <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em] ml-2 text-center align-middle'>Professional teaching methods</span>
            <div className="pl-6 mt-2 ml-2">
             
              <span className=' font-medium text-[14px] md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em] align-middle'>We are proficient at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Payment */}
      <div className="w-full md:w-1/2 bg-white p-8 xl:p-20 mt-6 md:mt-0  rounded-lg shadow-lg flex flex-col  gap-10">
        <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em] align-middle mb-4">Payment</h2>
        <div className="space-y-4">
          <div>
            <img src={greenImg} alt="Space Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Space for creative ideas</span>
          </div>
          <div>
            <img src={greenImg} alt="Engage Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Engaging and fun curriculum</span>
          </div>
          <div>
            <img src={greenImg} alt="Professional Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Professional teaching methods</span>
          </div>
          <div>
            <img src={greenImg} alt="Learn Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Learn from AI & Data Science experts</span>
          </div>
          <div>
            <img src={greenImg} alt="Courses Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Courses in IT, NFT, and M alumni</span>
          </div>
          <div>
            <img src={greenImg} alt="UK Icon" className="inline-block mr-2" />
            <span className='font-normaltext-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>UK certification upon completion</span>
          </div>
          <div>
            <img src={greenImg} alt="Personalized Icon" className="inline-block mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em] align-middle'>Personalized one-to-one training</span>
          </div>
        </div>
        <button className="mt-6 w-[222px] h-[64px] cursor-pointer bg-[#009688] text-white py-2 rounded hover:bg-teal-700 transition duration-300 font-bold text-[18px] leading-[100%] tracking-normal">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Payment;