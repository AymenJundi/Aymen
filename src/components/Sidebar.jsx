import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaBlog,
  FaQuestion, FaEnvelope, FaDollarSign,
} from 'react-icons/fa';

const links = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/about', label: 'About', icon: <FaUserAlt /> },
  { path: '/services', label: 'Services', icon: <FaTools /> },
  { path: '/experience', label: 'Experience', icon: <FaUserAlt /> },
  { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> }, // 🧹 simplified!
  { path: '/pricing', label: 'Pricing', icon: <FaDollarSign /> },
  { path: '/blog', label: 'Blog', icon: <FaBlog /> },
  { path: '/faq', label: 'FAQ', icon: <FaQuestion /> },
  { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
 
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showImage, setShowImage] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !document.querySelector('header')?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          flex flex-col items-center px-4 py-6 pt-20 md:pt-6 scrollbar-hide
        `}
        style={{ overflowY: 'auto' }}
      >
        {/* Profile */}
        <div
          className="flex flex-col items-center mb-8 cursor-pointer pt-6"
          onClick={() => setShowImage(true)}
        >
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover bg-gray-100 p-1 shadow"
          />
          <h1 className="text-sm md:text-lg font-semibold text-blue-600 mt-3">Aymen Jundi</h1>
          <p className="text-xs md:text-sm text-gray-500">Fullstack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 w-full">
          {links.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-md hover:bg-blue-50 transition ${
                  isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Fullscreen Profile Image */}
      {showImage && (
        <div
          className="fixed inset-0 bg-transparent z-50 flex items-center justify-center"
          onClick={() => setShowImage(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/assets/profile1.png"
              alt="Aymen Jundi"
              className="w-full h-full object-cover transform translate-y-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
