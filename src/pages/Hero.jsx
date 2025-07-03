import React from 'react';
import {
  FaReact, FaNodeJs, FaDatabase, FaRobot, FaCode,
  FaHtml5, FaCss3Alt, FaLaptopCode, FaBolt, FaCogs
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import profile from '/assets/profile1.png';

const techStacks = [
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-500' },
  { name: 'Prompt Engineering', icon: <FaRobot />, color: 'text-purple-500' },
  { name: 'REST API', icon: <FaCode />, color: 'text-gray-700' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => (
  <>
    {/* Hero Section */}
    <section
      id="hero"
      className="scroll-mt-[64px] pt-24 md:pt-[0.5px] px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between bg-gray-50 min-h-screen relative"
    >
      {/* Left side text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left z-10"
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Aymen Jundi</span>
        </h1>
        <TypeAnimation
          sequence={[
            'Fullstack Developer', 2500,
            'AI Workflow Architect', 2500,
            'Prompt Engineering Specialist', 2500,
            'Automation Systems Developer', 2500,
            'AI Agent Creator', 2500,
            'API Infrastructure Builder', 2500,
          ]}
          speed={25}
          className="text-lg md:text-2xl font-semibold text-gray-700 mt-2 h-10"
          repeat={Infinity}
        />
        <p className="mt-4 text-gray-600 max-w-lg leading-relaxed text-sm md:text-base">
          Self-taught Fullstack Engineer specializing in React.js, Next.js, Node.js, and scalable systems. I build high-performance web apps, smart APIs, and intelligent AI agents that automate business workflows and boost efficiency.
        </p>
        <ul className="mt-4 text-sm md:text-base text-gray-700 list-disc list-inside">
          <li>⚡ Fluent in JavaScript, React.js, Next.js, Node.js, Express, HTML5, and Tailwind CSS — frontend and backend built for speed & clarity</li>
          <li>🤖 Crafting intelligent AI agents with real-world business impact</li>
          <li>🏢 Delivered comprehensive fullstack systems for diverse clients and industries</li>
          <li>🛠️ Rapid prototyper — I turn ideas into live products</li>
        </ul>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mb-12 md:mb-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <div className="absolute -inset-2 md:-inset-4 rounded-full bg-blue-400 blur-xl opacity-40 z-0"></div>
          <img
            src={profile}
            alt="Aymen Jundi"
            className="relative z-10 w-40 h-40 md:w-64 md:h-64 rounded-full object-cover object-[50%_60%] shadow-lg border-4 border-white"
          />
        </div>
      </motion.div>
    </section>

    {/* Tech Stack Slider */}
    <div className="w-full overflow-hidden no-scrollbar pointer-events-none bg-gray-50 mt-8 md:mt-[0.5px] mb-8">
      <div className="relative w-full">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-20" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-20" />
        <div className="flex gap-4 w-max animate-smooth-marquee whitespace-nowrap px-4 z-10">
          {techStacks.concat(techStacks).map((stack, idx) => (
            <div
              key={idx}
              className={`min-w-[120px] flex flex-col items-center justify-center py-3 px-3 mx-2 rounded-lg bg-white shadow-md hover:shadow-lg transition ${stack.color}`}
            >
              <div className="text-2xl mb-1">{stack.icon}</div>
              <p className="text-xs font-medium">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

   {/* What I Do */}
<motion.section
  className="py-16 bg-[#f9fafb] px-6 md:px-12 text-center max-w-5xl mx-auto"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <motion.h2
    className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 tracking-tight"
    variants={fadeUp}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    What I Do
  </motion.h2>

  {/* ✅ Wrap cards in a grid div and close it */}
  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        icon: <FaLaptopCode className="text-5xl text-blue-600 mx-auto mb-6" />,
        title: 'Web & Mobile Development',
        desc: 'Crafting blazing-fast, responsive web and mobile apps with React.js, Next.js, and Node.js — tailored for your business goals.'
      },
      {
        icon: <FaRobot className="text-5xl text-purple-600 mx-auto mb-6" />,
        title: 'AI Agents & Automation',
        desc: 'Designing intelligent AI agents and workflow automations that streamline customer support, data processing, and business operations.'
      },
      {
        icon: <FaCogs className="text-5xl text-green-600 mx-auto mb-6" />,
        title: 'API & Backend Systems',
        desc: 'Building clean, scalable REST & GraphQL APIs and backend infrastructure to power your apps, dashboards, and integrations.'
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        className="p-8 rounded-xl bg-gradient-to-tr shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.05] cursor-pointer"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
      >
        {item.icon}
        <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div> {/* ✅ THIS was missing */}
</motion.section>

      {/* Featured Projects snippet */}
      <motion.section
        className="py-16 bg-[#f9fafb] px-6 md:px-12 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[{
            title: 'School Portal',
            desc: 'A secure student system where users can log in to view grades, communicate with teachers, track attendance, access resources, and more — empowering students and staff with real-time data.'
          }, {
            title: 'Custom ERP Solution',
            desc: 'Tailored enterprise resource planning software designed to integrate and optimize your business processes, from inventory and sales to HR and finance.'
          }].map((proj, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">{proj.title}</h4>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-block px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            See All Projects →
          </a>
        </motion.div>
      </motion.section>

      {/* Learning Journey */}
      <motion.section
        className="py-20 bg-[#f9fafb] px-6 md:px-12 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Learning Journey
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed px-4 md:px-0"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-4">
            Starting from zero, I’ve been a self-taught developer fueled by real-world projects, online courses, and constant curiosity. My current passion areas include API architecture, AI-powered automation, and cutting-edge prompt engineering — all aimed at building practical, scalable solutions.
          </p>
          <p>
            Every step of the way has sharpened my skills and deepened my understanding of how technology can transform businesses and lives.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Build Something Great Together
        </motion.h2>
        <motion.p
          className="text-sm md:text-base max-w-xl mx-auto mb-8"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Need a fast, reliable developer for your app, AI tool, or automation system? I’m ready to bring your ideas to life.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.section>
    </>
);

export default Hero;
