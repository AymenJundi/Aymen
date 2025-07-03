import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What services do you offer as a Fullstack Developer?',
    answer:
      'I provide complete web development solutions — from responsive frontend interfaces (React.js, Tailwind CSS) to powerful backend systems (Node.js, Express, MongoDB/MySQL). I also build custom dashboards, APIs, and automation tools using AI agents.',
  },
  {
    question: 'How can I contact you for a project?',
    answer:
      'You can reach me through the contact form on the website, or directly via Telegram, email (aymenjundi11@gmail.com), or LinkedIn. I respond within 24 hours.',
  },
  {
    question: 'Do you work with businesses outside Ethiopia?',
    answer:
      'Yes. While I’m based in Adama, Ethiopia, I’ve built solutions for various clients remotely. I work with global clients via Zoom, Google Meet, and WhatsApp.',
  },
  {
    question: 'What technologies are you currently learning?',
    answer:
      'In addition to React.js and Node.js, I’m actively learning advanced API development, prompt engineering, AI agent automation, and scalable SaaS architecture.',
  },
  {
    question: 'Can you build custom systems for schools or stores?',
    answer:
      'Absolutely! I’ve already developed custom platforms for schools and clothing stores — including admin panels, product pages, and pre-ordering systems.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-14 lg:px-24 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Got a question? I’ve got answers. Here are some of the most common queries about my services and experience.
        </p>
      </div>

      <div className="space-y-6">
        {faqData.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="ml-4 text-blue-600">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="px-6 pb-4 text-sm text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
