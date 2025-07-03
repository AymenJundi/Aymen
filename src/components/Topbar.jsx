import React, { useState, useEffect, useRef } from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaDownload, FaLinkedin,
  FaTelegramPlane, FaInstagram, FaWhatsapp, FaGithub,
} from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Topbar = ({ isOpen, setIsOpen }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [moreOpen]);

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 bg-white border-b border-gray-200 px-6 flex justify-between items-center z-50 h-14 md:h-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden p-1 rounded bg-transparent text-gray-700 hover:text-blue-600"
      >
        {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
      </button>

      <h2 className="text-lg font-semibold text-blue-600">Portfolio Website</h2>

      <div className="hidden md:flex items-center gap-4 text-lg">
        <a href="https://www.linkedin.com/in/aymen-jundi-964507331" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80"><FaLinkedin /></a>
        <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:opacity-80"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/elkingaj7/profilecard/?igsh=MTNnamQ2eWhndGcyZQ==" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80"><FaInstagram /></a>
        <a href="https://wa.me/+251964350841" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80"><FaWhatsapp /></a>
        <a href="https://github.com/AymenJundi" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:opacity-80"><FaGithub /></a>
        <a href="tel:+251964350841" className="text-green-600 hover:text-green-700"><FaPhoneAlt /></a>
        <a href="mailto:aymenjundi11@gmail.com" className="text-blue-600 hover:text-blue-700"><FaEnvelope /></a>
        <a href="/assets/Aymen_Jundi_CV.pdf" download className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
          <FaDownload className="text-sm" /> Download CV
        </a>
      </div>

      <div ref={menuRef} className="md:hidden relative">
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className="w-6 h-6 flex flex-col justify-center items-center gap-[3px] text-gray-700 hover:text-blue-600"
        >
          <span className={`block w-1.5 h-1.5 bg-current rounded-full ${moreOpen ? 'translate-y-[5px]' : ''}`} />
          <span className={`block w-1.5 h-1.5 bg-current rounded-full ${moreOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-1.5 h-1.5 bg-current rounded-full ${moreOpen ? '-translate-y-[5px]' : ''}`} />
        </button>

        {moreOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg py-2 z-50 text-sm">
            <a href="/assets/Aymen_Jundi_CV.pdf" download className="block px-4 py-2 hover:bg-blue-50 text-blue-600 flex items-center gap-2"><FaDownload />Download CV</a>
            <a href="https://www.linkedin.com/in/aymen-jundi-964507331" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#0A66C2] hover:bg-blue-50 flex items-center gap-2"><FaLinkedin />LinkedIn</a>
            <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#0088cc] hover:bg-blue-50 flex items-center gap-2"><FaTelegramPlane />Telegram</a>
            <a href="https://www.instagram.com/elkingaj7/profilecard/?igsh=MTNnamQ2eWhndGcyZQ==" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#E4405F] hover:bg-blue-50 flex items-center gap-2"><FaInstagram />Instagram</a>
            <a href="https://wa.me/+251964350841" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#25D366] hover:bg-blue-50 flex items-center gap-2"><FaWhatsapp />WhatsApp</a>
            <a href="https://github.com/AymenJundi" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#333] hover:bg-blue-50 flex items-center gap-2"><FaGithub />GitHub</a>
            <a href="tel:+251964350841" className="block px-4 py-2 text-green-600 hover:bg-blue-50 flex items-center gap-2"><FaPhoneAlt />Call Me</a>
            <a href="mailto:aymenjundi11@gmail.com" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 flex items-center gap-2"><FaEnvelope />Email Me</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
