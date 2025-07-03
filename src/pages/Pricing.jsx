import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const pricingPlans = [
  {
    name: 'Standard Website',
    priceUSD: '$99',
    priceETB: '≈ 5,700 Birr',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
    ],
    button: 'Get This Plan',
    highlight: false,
  },
  {
    name: 'Business Website',
    priceUSD: '$199',
    priceETB: '≈ 11,400 Birr',
    features: [
      'Unlimited Pages',
      'Advanced Design & UI/UX',
      'SEO + Analytics Setup',
      'Custom Features (Booking, Blog, etc.)',
    ],
    button: 'Choose Plan',
    highlight: true,
  },
  {
    name: 'Custom System / SaaS',
    priceUSD: '$299+',
    priceETB: '≈ 17,000 Birr+',
    features: [
      'Fullstack Development (Frontend + Backend)',
      'API Integrations',
      'Admin Panel / Dashboard',
      'AI Agent or Automation (Optional)',
    ],
    button: 'Request Quote',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-14 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Pricing Plans</h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          Fair pricing for real value. Choose what fits your project — whether it's a website, business platform, or a custom AI-powered system.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl shadow-lg p-6 bg-white flex flex-col justify-between border-2 ${
              plan.highlight ? 'border-blue-600' : 'border-gray-200'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-blue-600 text-3xl font-bold">{plan.priceUSD}</p>
              <p className="text-gray-500 text-sm mb-6">{plan.priceETB}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={`block text-center py-2 rounded font-semibold transition ${
                plan.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {plan.button}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
