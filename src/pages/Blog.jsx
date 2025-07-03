import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPenFancy, FaCode, FaLightbulb } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'From Freelance to Founder: My Journey as a Self-Taught Fullstack Developer',
    icon: <FaPenFancy />,
    date: 'June 2025',
    summary:
      'How I went from learning React and Node in my room in Adama to building real software used by businesses across Ethiopia.',
    full: `After months of late-night tutorials, I launched my first restaurant menu builder. It was messy, but functional. I cold-called businesses in Adama, explained what I did, and one school gave me a shot. That one project led to more.

Now I’ve built websites for clothing stores, schools, and health professionals. I manage full frontend/backend with React, Node, MongoDB, and I’m now diving into API integrations and AI automations. If you’re just starting: learn, launch, repeat. The opportunities will follow.`,
    tags: ['Self-Taught', 'Career', 'Motivation'],
  },
  {
    title: 'How I Built a Digital Menu System for Restaurants (Without Funding)',
    icon: <FaCode />,
    date: 'May 2025',
    summary:
      'Breaking down the architecture, features, and tech stack behind my digital menu SaaS built with React, Node, and QR code generation.',
    full: `The idea was simple: let restaurants upload their menu, and give them a QR code customers can scan. I built the frontend in React with form-based inputs for food name, category, and price. The backend is Node + MongoDB, with a dynamic route for each restaurant’s menu.

It auto-generates PDFs with scannable QR codes. Everything’s hosted on Vercel. This system now powers multiple Ethiopian restaurants and helped reduce their printing cost and manual updates.`,
    tags: ['Project', 'React.js', 'Node.js', 'SaaS'],
  },
  {
    title: 'Why Every Local Business Needs a Website in 2025',
    icon: <FaLightbulb />,
    date: 'April 2025',
    summary:
      'Insights from helping Ethiopian stores go digital — and why having a clean website is better than printing 1,000 flyers.',
    full: `Most local businesses think a Facebook page is enough. But websites build trust. They're open 24/7, show your products, and allow people to find you through Google.

I’ve helped brands like Sankofa Fashion and Fashion Clothing attract new customers by having professional digital storefronts. In 2025, if you’re not online, you’re invisible.`,
    tags: ['Business', 'Marketing', 'Web Dev'],
  },
];

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="blog"
      className="bg-[#f8fafc] py-20 px-6 sm:px-10 md:px-14 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Insights & Stories
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          I write about development, startups, freelancing, and what I’m learning along the way.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="text-3xl text-blue-600 mb-4">{post.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              {post.title}
            </h2>

            {/* Date */}
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>

            {/* Summary */}
            <p className="mt-3 text-gray-600 text-sm">{post.summary}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Read More Button */}
            <button
              onClick={() => toggleExpand(index)}
              className="mt-5 text-sm text-blue-600 hover:underline font-medium"
            >
              {expandedIndex === index ? 'Show Less' : 'Read More →'}
            </button>

            {/* Expanded Full Text */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="mt-4 text-sm text-gray-700 whitespace-pre-line"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  {post.full}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
