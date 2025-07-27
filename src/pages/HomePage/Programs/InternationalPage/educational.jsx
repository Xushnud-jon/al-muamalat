import React from 'react';
import tick from '../../../../assets/images/tick.png';
import altBullet from '../../../../assets/images/alt.png';

const Educational = () => {
  const data = {
    title: 'International educational programs',
    description: 'Al Muamalat Education\'s international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.',
    sections: [
      {
        title: 'What you\'ll learn',
        items: [
          'Gain a comprehensive understanding of Islamic finance principles and ethics.',
          'Build a portfolio with 10+ real-world projects in Islamic financial services.',
          'Learn to develop and manage Sharia-compliant financial products.',
          'Master key concepts in Islamic banking, investment, and wealth management.',
          'Understand the fundamentals of risk management in Islamic finance.',
          'Develop skills to work as an Islamic finance consultant.',
        ],
        bullet: tick,
      },
      {
        title: 'Why should you study at "AL-MUAMALAT"?',
        items: [
          'Lifetime access',
          'Video lessons',
          'Tests',
          'Projects',
          'Downloadable resources',
          'Access via mobile device',
        ],
        bullet: altBullet,
      },
    ],
  };

  return (
    <div className=" py-10 px-4 mb-3">
      <div className="max-w-7xl mx-auto rounded-lg">
       <div className='p-1 xl:pr-40 xl:pl-40'>
         <h1 className="text-[30px] md:text-[40px] font-bold text-center text-gray-800 mb-4 ">
          {data.title}
        </h1>
        <p className="text-center text-[20px] text-[#686868] mb-6">
          {data.description}
        </p>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.map((section, index) => (
            <div key={index} className="bg-blue-50 p-7 rounded-lg h-auto ">
              <h2 className="text-[28px] md:text-[32px] text-center font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              <ul className="list-none list-inside text-gray-700 space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-[16px] md:text-[20px]">
                    <img src={section.bullet} alt={index === 0 ? 'bullet' : 'alt-bullet'} className={`w-2 h-2 md:w-3 md:h-3 ${index === 0 ? 'custom-tick w-[28px] h-[28px] md:w-[35px] md:h-[35px]' : 'custom-alt '}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educational;