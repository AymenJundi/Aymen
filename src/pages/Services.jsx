import React from 'react';
import {
  FaCode, FaRobot, FaMobileAlt, FaCogs, FaDatabase, FaRocket
} from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web App Development',
    icon: <SiReact className="text-blue-500" />,
    description: 'I build lightning-fast web apps with React, Next.js, Tailwind, and modern UI/UX standards.',
  },
  {
    title: 'Custom Business Systems',
    icon: <FaCogs className="text-green-600" />,
    description: 'I create fully custom systems for schools, stores, and professionals — portals, dashboards, and operations tools.',
  },
  {
    title: 'AI Agents & Automation',
    icon: <FaRobot className="text-purple-500" />,
    description: 'Smart bots that handle tasks, respond to users, and automate your business logic using prompt engineering and APIs.',
  },
  {
    title: 'API Design & Integration',
    icon: <FaCode className="text-gray-700" />,
    description: 'Clean, scalable REST APIs for connecting your frontend, mobile, and database seamlessly — built with Node.js.',
  },
  {
    title: 'Database Architecture',
    icon: <FaDatabase className="text-blue-700" />,
    description: 'I design MongoDB and MySQL databases with performance, scalability, and security in mind.',
  },
  {
    title: 'Performance Optimization',
    icon: <FaRocket className="text-red-500" />,
    description: 'I optimize code, eliminate slowdowns, and scale your systems to handle real-world traffic and usage.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f9fafb] py-20 px-6 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">What I Offer</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          I help businesses and individuals build digital products that work — fast, scalable, and smart.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 flex flex-col items-start"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default Services;
