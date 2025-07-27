import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/svg/logo.svg';
import UzFlag from '../assets/images/uzb.png';
import EnFlag from '../assets/images/eng.png';
import RuFlag from '../assets/images/rus.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menuOchiq, setMenuOchiq] = useState(false);
  const [til, setTil] = useState("UZB");
  const [tilDropdownOchiq, setTilDropdownOchiq] = useState(false);
  const [programsDropdownOchiq, setProgramsDropdownOchiq] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOchiq(false);
        setProgramsDropdownOchiq(false);
        setTilDropdownOchiq(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tillar = [
    { kod: "ENG", nomi: "English", bayroq: EnFlag },
    { kod: "UZB", nomi: "O'zbekcha", bayroq: UzFlag },
    { kod: "RUS", nomi: "Русский", bayroq: RuFlag }
  ];

  const dasturlar = [
    { nomi: "International educational programs", path: "/international-programs" },
    { nomi: "Specialized courses", path: "/specialized-courses" },
    { nomi: "Islamic Finance Literacy Course", path: "/islamic-finance" },
    { nomi: "Certification program", path: "/certification" }
  ];

  const tanlanganTil = tillar.find(t => t.kod === til) || tillar[1];

  const tilTanlash = (yangiTil) => {
    setTil(yangiTil);
    setTilDropdownOchiq(false);
    setMenuOchiq(false);
  };

  const toggleMobilePrograms = () => {
    setProgramsDropdownOchiq(!programsDropdownOchiq);
  };

  return (
    <header ref={menuRef} className="bg-white shadow-md py-3 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => navigate('/') }>
          <img src={Logo} alt="AL MUAMALAT" className="h-7 w-auto md:h-8 lg:h-9" />
          <span className="text-xl font-bold text-[#009688] hidden sm:inline-block">AL MUAMALAT</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          <Link to="/" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1" onClick={() => setMenuOchiq(false)}>Home</Link>
          <div className="relative group">
            <button onClick={() => setProgramsDropdownOchiq(!programsDropdownOchiq)} className="flex items-center text-gray-700 hover:text-[#009688] font-medium cursor-pointer transition duration-200 px-2 py-1">
              Programs
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${programsDropdownOchiq ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programsDropdownOchiq && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                {dasturlar.map((dastur, index) => (
                  <Link key={index} to={dastur.path} className={`block px-4 py-2 text-gray-700 hover:text-[#009688] hover:bg-gray-50 ${index < dasturlar.length - 1 ? 'border-b border-gray-100' : ''}`} onClick={() => setProgramsDropdownOchiq(false)}>
                    {dastur.nomi}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/finance-tools" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1">Finance tools</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1" onClick={() => setMenuOchiq(false)}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          <div className="relative">
            <button onClick={() => setTilDropdownOchiq(!tilDropdownOchiq)} className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100 transition duration-200">
              <img src={tanlanganTil.bayroq} alt={tanlanganTil.kod} className="w-5 h-5 mr-2" />
              <span className="hidden lg:inline">{tanlanganTil.kod}</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {tilDropdownOchiq && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                {tillar.map((t) => (
                  <button key={t.kod} onClick={() => tilTanlash(t.kod)} className={`flex items-center w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 ${til === t.kod ? 'bg-indigo-50 font-medium' : ''}`}>
                    <img src={t.bayroq} alt={t.kod} className="w-5 h-5 mr-2" />
                    <span>{t.nomi}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => navigate('/login')} className="bg-[#009688] hover:bg-[#00796b] text-white px-4 py-2 rounded-md transition duration-200 cursor-pointer whitespace-nowrap">Sign in</button>
        </div>

        <div className="flex lg:hidden items-center space-x-3">
          <div className="relative">
            <button onClick={() => setTilDropdownOchiq(!tilDropdownOchiq)} className="flex items-center p-1 rounded-full hover:bg-gray-100">
              <img src={tanlanganTil.bayroq} alt={tanlanganTil.kod} className="w-6 h-6" />
            </button>
            {tilDropdownOchiq && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                {tillar.map((t) => (
                  <button key={t.kod} onClick={() => tilTanlash(t.kod)} className={`flex items-center w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 ${til === t.kod ? 'bg-indigo-50 font-medium' : ''}`}>
                    <img src={t.bayroq} alt={t.kod} className="w-5 h-5 mr-2" />
                    <span>{t.nomi}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => navigate('/login')} className="bg-[#009688] hover:bg-[#00796b] text-white px-3 py-1.5 rounded-md text-sm cursor-pointer">Sign in</button>

          <button onClick={() => setMenuOchiq(!menuOchiq)} className="text-gray-700 p-1 rounded-full hover:bg-gray-100" aria-label="Menyu">
            {menuOchiq ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOchiq && (
        <div className="lg:hidden bg-white py-3 px-4 space-y-2 shadow-inner">
          <Link to="/" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>Home</Link>
          <div className="relative">
            <button onClick={toggleMobilePrograms} className="w-full flex justify-between items-center py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200">
              <span>Programs</span>
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${programsDropdownOchiq ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programsDropdownOchiq && (
              <div className="pl-4 mt-1 space-y-1">
                {dasturlar.map((dastur, index) => (
                  <button key={index} onClick={() => { navigate(dastur.path); setProgramsDropdownOchiq(false); setMenuOchiq(false); }} className="block w-full text-left py-2 px-3 text-gray-600 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200 text-sm">
                    {dastur.nomi}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link to="/finance-tools" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>Finance tools</Link>
          <Link to="/contact" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
