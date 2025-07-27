import React from 'react';

const CourseInfo = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-white p-5 xl:p-1">
      <h1 className="text-[30px] md:text-[40px] font-bold text-center text-gray-800 mb-6">Brief information about the course</h1>
      
    <div className='flex flex-col md:flex-row items-start'>
          <div className="mb-8 ">
        <div className="flex items-center mb-3 cursor-pointer group ">
          <h2 className="text-[24px] md:text-[34px] font-semibold text-[#009688] group-hover:text-[#00796B]">Videodarslar ▼</h2>
        </div>
        <p className="text-[18px] md:text-[28px] text-[#152032] pl-2 ">
          Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.
        </p>
      </div>
      
      <div>
        <div className="flex items-center mb-3 cursor-pointer group">
          <h2 className="text-[24px] md:text-[34px]  font-semibold text-[#009688] group-hover:text-[#00796B]">Tasks ▼</h2>
        </div>
        <p className="text-[18px] md:text-[28px] text-[#152032] pl-2">
          Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.
        </p>
      </div>
    </div>
    </div>
  );
};

export default CourseInfo;