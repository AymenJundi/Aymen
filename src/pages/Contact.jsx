import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaDownload, FaLinkedin, FaTelegramPlane, FaInstagram,
  FaWhatsapp, FaGithub, FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';

const TELEGRAM_BOT_TOKEN = '7867300683:AAFAeZhrhCETfQqmxnZdKUmANJ7Z11a6bHM';
const TELEGRAM_CHAT_ID = '1039037061';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendTelegramMessage = async (text) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      return data.ok;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageText = `
<b>📨 New Contact Message</b>\n
<b>👤 Name:</b> ${formData.name}
<b>📧 Email:</b> ${formData.email}
<b>💬 Message:</b> ${formData.message}
    `;

    setSending(true);
    const ok = await sendTelegramMessage(messageText);
    setSending(false);

    if (ok) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-14 lg:px-24 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Contact Me</h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Let’s connect — whether it’s for a project, collaboration, or just a chat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Send a Message</h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-2 rounded font-semibold text-white transition ${
              sending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {sending ? 'Sending...' : 'Send'}
          </button>

          {success === true && (
            <p className="mt-4 text-green-600 font-medium">✅ Message sent successfully!</p>
          )}
          {success === false && (
            <p className="mt-4 text-red-600 font-medium">❌ Failed to send message. Try again.</p>
          )}
        </motion.form>

        {/* Contact Info & Social Links */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Other Ways to Reach Me</h3>

          <a href="/assets/Aymen_Jundi_CV.pdf" download className="block px-4 py-2 hover:bg-blue-50 text-blue-600 flex items-center gap-2 rounded">
            <FaDownload /> Download CV
          </a>
          <a href="https://www.linkedin.com/in/aymen-jundi-964507331" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#0A66C2] hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#0088cc] hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaTelegramPlane /> Telegram
          </a>
          <a href="https://www.instagram.com/elkingaj7/profilecard/?igsh=MTNnamQ2eWhndGcyZQ==" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#E4405F] hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaInstagram /> Instagram
          </a>
          <a href="https://wa.me/+251964350841" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#25D366] hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://github.com/AymenJundi" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#333] hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaGithub /> GitHub
          </a>
          <a href="tel:+251964350841" className="block px-4 py-2 text-green-600 hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaPhoneAlt /> Call Me
          </a>
          <a href="mailto:aymenjundi11@gmail.com" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 flex items-center gap-2 rounded">
            <FaEnvelope /> Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
