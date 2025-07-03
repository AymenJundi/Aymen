import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const webProjects = [
  {
    title: 'Daystar Academy',
    img: '/assets/project/1.png',
    link: 'https://daystar-academy.vercel.app/',
    desc: 'A website for a school based in Adama, Ethiopia, helping them with their online presence.',
  },
  {
    title: 'Fashion Clothing',
    img: '/assets/project/2.png',
    link: 'https://fashionclothing.vercel.app/',
    desc: 'A clothing store website with a modern design and responsive layout.',
  },
  {
    title: 'Jundi Ahmed',
    img: '/assets/project/3.png',
    link: 'https://jundiahmed.vercel.app/',
    desc: 'A website for a professional health and nutrition specialist.',
  },
  {
    title: 'Portfolio',
    img: '/assets/project/4.png',
    link: 'https://aymenjundi.github.io/Aymen-Jundi-Portfolio/',
    desc: 'Portfolio for a professional web developer.',
  },
  {
    title: 'Aymen Jundi',
    img: '/assets/project/5.png',
    link: 'https://aymenjundi.github.io/personal/',
    desc: 'Personal website showcasing skills and projects.',
  },
  {
    title: 'Rex Labs',
    img: '/assets/project/6.png',
    link: 'https://rexlabs.vercel.app/',
    desc: 'A website for a tech company specializing in AI and automation solutions.',
  },
  {
    title: 'Sankofa Fashion',
    img: '/assets/project/7.png',
    link: 'https://sankofa-fashion.vercel.app/',
    desc: 'A website for a fashion brand, showcasing their latest collections and styles.',
  },
];

const SectionBlock = ({ title, id, children }) => (
  <div className="mb-20" id={id}>
    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block pb-1">
      {title}
    </h3>
    {children}
  </div>
);

const Projects = () => {
  const [activeDesc, setActiveDesc] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsSmallDevice(window.innerWidth < 768);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#f9fafb] py-20 px-6 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Projects</h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          From fast websites to full systems — I’ve delivered practical software solutions that bring real value.
        </p>
      </div>

      <SectionBlock title="Web Development" id="web">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => {
            const isDescVisible = activeDesc === index;
            const isClicked = clickedCard === index;

            return (
              <motion.div
                key={index}
                className="relative group bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (isSmallDevice) {
                    setClickedCard(isClicked ? null : index);
                  }
                }}
              >
                {/* Project Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-blue-600">{project.title}</h4>
                  <AnimatePresence>
                    {isDescVisible && (
                      <motion.p
                        className="text-sm text-gray-700 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

{/* Hover Buttons */}
<div
  className={`absolute inset-0 z-10 transition-opacity duration-300 ${
    isSmallDevice
      ? isClicked
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
      : 'group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto'
  }`}
>
  {/* Open Website Button – top right */}
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-0 right-0 px-5 py-3 bg-gray-900 text-white text-sm font-medium shadow-lg hover:bg-gray-800
      rounded-l-full rounded-r-none"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Open Website
  </motion.a>

  {/* Show Description Button – bottom left */}
  <motion.button
    onClick={(e) => {
      e.stopPropagation();
      setActiveDesc(isDescVisible ? null : index);
    }}
    className="absolute bottom-0 left-0 px-5 py-3 bg-blue-600 text-white text-sm font-medium shadow-lg hover:bg-blue-700
      rounded-r-full rounded-l-none"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    {isDescVisible ? 'Hide Description' : 'Show Description'}
  </motion.button>
</div>
              </motion.div>
            );
          })}
        </div>
      </SectionBlock>

      {/* App Development */}
      <SectionBlock title="App Development" id="app">
        <div className="text-gray-500 text-sm italic">
          🚧 No projects yet. Stay tuned for exciting mobile apps!
        </div>
      </SectionBlock>

      {/* Custom Business Systems */}
      <SectionBlock title="Custom Business Systems" id="systems">
        <div className="text-gray-500 text-sm italic">
          🚧 No systems live yet. More tailored company platforms coming soon!
        </div>
      </SectionBlock>

      {/* AI Agents & Automation */}
      <SectionBlock title="AI Agents & Automation" id="ai">
        <div className="text-gray-500 text-sm italic">
          🤖 No agents deployed yet. Currently developing powerful AI automations.
        </div>
      </SectionBlock>

      {/* API Design & Integration */}
      <SectionBlock title="API Design & Integration" id="api">
        <div className="text-gray-500 text-sm italic">
          🔌 No APIs published yet. Practical integrations & REST APIs in progress.
        </div>
      </SectionBlock>
    </section>
  );
};

export default Projects;
