'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import contactImg from '../../public/images/hello.png'; // Ganti sesuai nama gambar Anda

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    ask: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const { name, ask, message } = form;
    return `Hello, I'm *${name}*\nAsk For: ${ask}\nMessage: ${message}`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '6281381376027';
    const encodedText = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact: ${form.ask}`);
    const body = encodeURIComponent(buildMessage());
    const url = `mailto:viathree01@gmail.com?subject=${subject}&body=${body}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 100);

  return (
    <>
      <section className="relative bg-[var(--backg)] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <h1
          className="text-white px-6 py-6 text-[64px] font-semibold z-10 transition-transform duration-200"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          CONTACT FORM
        </h1>
        <div className="absolute inset-0 bg-opacity-30 z-0" />
      </section>

      <section className="bg-[var(--color-secondary)] py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
          {/* Left side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-text)]">GET IN TOUCH</h2>
            <form className="space-y-4">
              <InputFields form={form} handleChange={handleChange} />

              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                <button
                  type="submit"
                  onClick={handleEmailSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                >
                  Submit via Email
                </button>
                <button
                  type="submit"
                  onClick={handleWhatsAppSubmit}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
                >
                  Submit via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="relative md:w-1/2 h-100 md:h-auto">
            <Image
              src={contactImg}
              alt="Happy people"
             
              className=" object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

// Reusable form fields
const InputFields = ({ form, handleChange }) => (
  <>
    <div>
      <label className="block text-md font-bold text-[var(--color-text)] mb-1">Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border-b border-gray-400 py-2 placeholder-gray-400 focus:outline-none text-[var(--color-text)]"
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label className="block text-md font-bold text-[var(--color-text)] mb-1">What is it about?</label>
      <div className="space-y-2">
        {['Freelance', 'Helper', 'Community', 'Etc'].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name="ask"
              value={option}
              checked={form.ask === option}
              onChange={handleChange}
              required
              className="accent-black"
            />
            <span className="text-[var(--color-text)]">{option}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <label className="block text-md font-bold text-[var(--color-text)] mb-1">Message</label>
      <textarea
        name="message"
        rows="3"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border-b border-gray-400 py-2 focus:outline-none text-[var(--color-text)]"
        placeholder="Your message..."
      />
    </div>
  </>
);

export default ContactSection;
