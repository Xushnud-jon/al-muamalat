import React from 'react'
import Person from '../../../assets/images/person.png';
import Buttonimg from '../../../assets/images/Button.png';
import Data from '../../../assets/images/data.png';

const Hero = () => {
  return (
    <div className="bg-teal-600 max-w-8xl m-auto text-white py-3 px-4 sm:px-6 lg:px-8 top-0 z-50">
      <div className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto'>
        {/* Left Section - Text */}
        <div className="text-left w-full lg:w-[55%] xl:w-[723px] h-auto flex flex-col justify-between px-4 sm:px-0 gap-4 sm:gap-6 md:gap-8">
          <div className="text-left">
            <p className="text-xs sm:text-sm mb-2 text-[#252641] bg-[#FFFFFF] inline-block px-2 py-1 rounded">
              Seeking Knowledge is an Obligation in Islam
            </p>
          </div>

          <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.2] md:leading-[1.3] lg:leading-[70px] tracking-normal">
            Enhance Your Understanding of Islamic Ethics with Al-Muamalat
          </h1>
          
          <div className="mt-2 sm:mt-4 md:mt-6 flex items-center justify-center lg:justify-start">
            <button className="relative bg-orange-500 text-white w-[160px] sm:w-[180px] md:w-[200px] lg:w-[224px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] rounded-lg hover:bg-orange-600 transition z-0 cursor-pointer text-xs sm:text-sm md:text-base">
              STUDENTS OPINION
            </button>
            <img 
              src={Buttonimg} 
              className="-ml-3 sm:-ml-4 md:-ml-5 z-1 w-[180px] sm:w-auto" 
              alt="button decoration" 
            />
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-[45%] xl:w-[504px] h-auto mt-8 lg:mt-0 relative">
          <div className="bg-[#FFFFFFCC] backdrop-blur-[20px] w-[140px] sm:w-[160px] md:w-[183px] h-[35px] sm:h-[40px] md:h-[45px] flex items-center gap-2 px-2 rounded-md absolute top-4 left-4 z-10">
            <img src={Data} alt="data" className="w-[25px] sm:w-[30px] md:w-[37px] h-[25px] sm:h-[30px] md:h-[37px]" />
            <div>
              <h3 className="font-nunito font-bold text-xs sm:text-sm md:text-[16px] leading-[1.2] tracking-[0.02em] text-[#595959]">
                250k <br />
                <span className="font-inter font-semibold text-[10px] sm:text-xs md:text-sm leading-[1.2] tracking-[0.02em] text-[#545567]">
                  Assisted Student
                </span>
              </h3>
            </div>
          </div>

          <img
            src={Person}
            alt="Student with books"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero