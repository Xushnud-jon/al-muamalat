import React from "react";
import FundManagementIcon from "../../../assets/images/foundmanagementIcon.png";
import IslamicBankIcon from "../../../assets/images/ForIslamicBanks.png";
import InternationalIcon from "../../../assets/images/international-icon.png";
import CapitalMarketIcon from "../../../assets/images/Marketicon.png";
import EducationIcon from "../../../assets/images/education-icon.png";
import ShariahAuditIcon from "../../../assets/images/ShariahAuditIcon.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Islamic Fund Management",
      description: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      link: "Learn more",
      bgColor: "bg-[#DEEAFF]",
      icon: FundManagementIcon 
    },
    {
      title: "International Relations",
      description: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      link: "Learn more",
      bgColor: "bg-[#D5F6ED]",
      icon: InternationalIcon
    },
    {
      title: "Education and Training",
      description: "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      link: "Learn more",
      bgColor: "bg-[#FBE2F4]",
      icon: EducationIcon
    },
    {
      title: "For Islamic Banks",
      description: "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
      link: "Learn more",
      bgColor: "bg-[#E2DBF9]",
      icon: IslamicBankIcon
    },
    {
      title: "Islamic Capital Market",
      description: "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      link: "Learn more",
      bgColor: "bg-[#EBEFF3]",
      icon: CapitalMarketIcon
    },
    {
      title: "Shariah Compliance Audit",
      description: "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      link: "Learn more",
      bgColor: "bg-[#FFEDB6]",
      icon: ShariahAuditIcon
    }
  ];

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            Our services
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col h-full ${service.bgColor} p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 sm:w-[75px] sm:h-[75px] rounded-full  flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 shadow-sm overflow-hidden">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-contain "
                  />
                </div>
                <h3 className="font-opensans text-lg sm:text-xl lg:text-2xl leading-[120%] tracking-normal self-center">
                  {service.title}
                </h3>
              </div>
              
              <p className="font-opensans font-normal text-sm sm:text-base lg:text-[17px] leading-[130%] tracking-normal mb-4 sm:mb-6 flex-grow text-[#454545]">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent font-opensans font-semibold text-sm sm:text-base leading-[100%] tracking-normal rounded-md text-[#FFFFFF] bg-[#152032] hover:bg-[#1F2D44] transition-colors duration-300 w-full justify-center shadow-sm"
                >
                  {service.link}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;