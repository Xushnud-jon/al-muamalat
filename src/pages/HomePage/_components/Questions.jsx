import React, { useState } from 'react';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Will I receive lifetime access to the courses?",
      answer: "Yes, all purchased courses are available for lifetime access.",
    },
    {
      question: "Will I receive lifetime access to the courses?",
      answer: "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
    },
    {
      question: "Can I use the materials for community teaching?",
      answer: "Materials are for personal use only unless otherwise specified.",
    },
    {
      question: "Is there a free trial for the courses?",
      answer: "Yes, we offer a 7-day free trial for most courses.",
    },
    {
      question: "Who can benefit from these courses?",
      answer: "These courses are designed for educators at all levels.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-3 md:p-3 2xl:p-0 overflow-hidden">
      <h1 className="font-bold text-[25px] md:text-[40px] leading-[100%] tracking-[0%] font-inter mb-5 text-center">
        Frequently asked questions
      </h1>
      <p className='font-medium text-[15px] md:text-[20px] leading-[100%] tracking-[0%] text-center font-inter text-[#686868] mb-10'>
        If you have any further questions, please contact us
      </p>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          {faqItems.slice(0, 2).map((item, index) => (
            <div key={index} className="pb-4 mb-4 rounded-[10px] px-[20px] py-4 border border-gray-200 flex flex-col gap-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className='font-inter font-medium text-[13px] md:text-[18px] lg:text-[20px] leading-[100%] tracking-[0%] pr-4'>
                  {item.question}
                </span>
                <span className="text-xl cursor-pointer">
                  {activeIndex === index ? '×' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  <p className='font-inter font-normal text-[12px] md:text-[17px] leading-[30px] tracking-[0%]'>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 px-4">
          {faqItems.slice(2).map((item, index) => (
            <div key={index + 2} className="pb-4 mb-4 rounded-[10px] px-[20px] py-4 border border-gray-200 flex flex-col gap-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleAccordion(index + 2)}
              >
                <span className='font-inter font-medium text-[13px] md:text-[18px] lg:text-[20px] leading-[100%] tracking-[0%] pr-4'>
                  {item.question}
                </span>
                <span className="text-xl cursor-pointer">
                  {activeIndex === index + 2 ? '×' : '+'}
                </span>
              </button>

              {activeIndex === index + 2 && (
                <div className="mt-2 text-gray-600">
                  <p className='font-inter font-normal text-[12px] md:text-[17px] leading-[30px] tracking-[0%]'>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
