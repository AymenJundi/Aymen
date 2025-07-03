import React from 'react';
import { FaBriefcase, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Freelance Fullstack Developer',
    company: 'Self-Employed · Remote',
    date: 'June 2024 – Present',
    icon: <FaLaptopCode className="text-blue-600" />,
    description: [
      'Built scalable web apps using React.js, Next.js, Node.js, and MongoDB.',
      'Worked with schools, clothing stores, professionals, and small businesses.',
      'Created full custom dashboards, school portals, and AI-powered tools.',
      'Integrated third-party APIs and built clean RESTful APIs for automation.',
    ],
  },
  {
    title: 'Web Consultant & Automation Builder',
    company: 'Private Clients · Ethiopia',
    date: '2024 – Present',
    icon: <FaRocket className="text-purple-500" />,
    description: [
      'Delivered business-focused solutions — menu builders, portals, and tools.',
      'Helped clients go digital with clean UI/UX and mobile-friendly systems.',
      'Applied AI agent principles for smart automation in business workflows.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20 px-6 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">My Experience</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Here's how I’ve helped clients grow with solid code, real business logic, and great user experience.
        </p>
      </div>

      <div className="relative border-l-4 border-blue-600 pl-6 space-y-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Icon Badge */}
            <div className="absolute -left-9 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
              {exp.icon}
            </div>

            <div className="bg-[#f9fafb] p-6 rounded-xl shadow hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
