import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="md:ml-64 flex flex-col">
          <Topbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className="flex-grow overflow-y-auto pt-20 px-6 md:px-12">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
