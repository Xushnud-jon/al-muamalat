import React from 'react';
import Finlay from "../../../assets/images/Finlay.png";

const StudentsSay = () => {
  const testimonialData = [
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirk",
      role: "Web designer",
      image: Finlay,
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirk",
      role: "Web designer",
      image: Finlay,
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirk",
      role: "Web designer",
      image: Finlay,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
     <div className='pr-5 pl-5 md:pl-40 md:pr-40'>
       <h2 className="font-bold text-[23px] md:text-[40px] leading-[100%] tracking-[0%] text-center mb-6">What students say</h2>
      <p className="font-inter  text-[15px] md:text-[17px] leading-[100%] tracking-[0%] text-center mb-10">
        Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
      </p>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialData.map((item, index) => (
          <div key={index} className="bg-[#F6F8F9] rounded-lg shadow-lg p-8  text-center">
            <p className="text-[#686868] text-left text-[17px] leading-[26px] tracking-[0%] font-inter mb-4">{item.text}</p>
            <div className="flex items-center justify-start  ">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsSay;