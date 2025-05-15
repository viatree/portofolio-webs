'use client';

import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, reason, message } = form;

    const text = `Shalom, saya *${name}*\nEmail: ${email}\nReason: ${reason}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = '601123457622';
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 100); // Batasi max offset agar tidak terlalu jauh

  return (
    <>
      <section className="relative bg-[var(--backg)] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <h1
          className="text-white px-6 py-6 text-[64px] font-semibold z-10 transition-transform duration-200"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          CONTACT US
        </h1>
        <div className="absolute inset-0 bg-opacity-30 z-0 " />
      </section>

      <section className="bg-[var(--color-secondary)] py-12 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-sm overflow-hidden md:flex shadow-lg">
          {/* Form */}
          <div className="w-full p-8">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)] ">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Reason</label>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none bg-transparent text-[var(--color-text)]"
                >
                  <option value="" disabled>Pilih Reason</option>
                  <option value="Saran">Saran</option>
                  <option value="Doa">Doa</option>
                  <option value="Pelayanan">Pelayanan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--backg2)] text-white px-4 py-2 rounded hover:bg-[var(--hover)] transition"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
