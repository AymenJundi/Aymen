import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaRobot, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const techStacks = [
  { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Prompt Engineering', icon: <FaRobot className="text-purple-500" /> },
  { name: 'REST APIs', icon: <FaCode className="text-gray-700" /> },
];

const About = () => {
  return (
    <section id="about" className="bg-[#f9fafb] py-20 px-6 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">About Me</h2>
        <p className="text-gray-600 text-lg mt-3 max-w-3xl mx-auto">
        Fullstack Developer, AI Builder & API Architect — turning ideas into scalable digital systems.
        </p>
      </div>

      {/* Bio and Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Bio */}
        <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            I'm <span className="text-blue-600 font-semibold">Aymen Jundi</span>, a self-taught fullstack
            developer based in Adama, Ethiopia. I build scalable, user-focused systems using stacks like
            <strong> React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
          </p>
          <p>
            My path wasn't traditional — I’ve built everything through real-world projects, consistency, and curiosity.
            I work with schools, retailers, and founders to create reliable portals, automations, and SaaS tools.
          </p>
          <p>
            I'm currently focused on <span className="text-purple-600 font-semibold">AI agents, prompt engineering</span>,
            and smart business automation using APIs and databases.
          </p>

          <div className="pt-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Currently leveling up in:</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">AI Agents</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Cloud APIs</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Next.js App Router</span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">MySQL + PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-blue-100 to-blue-300">
            <img
              src="/assets/profile1.png"
              alt="Aymen Jundi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="mt-24">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          Tech I Work With
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-2">{stack.icon}</div>
              <p className="text-sm font-medium text-gray-800">{stack.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
