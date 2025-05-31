import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--beige)] text-[var(--color-text)] py-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="vtaes Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Kontak */}
          <div className="flex flex-col space-y-3 items-start text-sm">
            <h3 className="text-lg font-semibold mb-1">INFO CONTACT</h3>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-xl" />
              <p>+62 813-8137-6027</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-xl" />
              <p>+60 111-485-9893 (Wa Only)</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMailBulk className="text-xl" />
              <p>Viathree01@gmail.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2 text-sm items-start">
            <h3 className="text-lg font-semibold mb-1">QUICK LINKS</h3>
            <Link href="/index" className="hover:text-[var(--color-lighter)]">About Me</Link>
            <Link href="/Resume" className="hover:text-[var(--color-lighter)]">Services</Link>
            <Link href="/portofolio" className="hover:text-[var(--color-lighter)]">Feed</Link>
            <Link href="/contact" className="hover:text-[var(--color-lighter)]">Contact</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[var(--color-text)] my-6" />

        {/* Social & Copy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex space-x-5">
            <a href="https://github.com/viatree" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-[var(--color-lighter)] transition" />
            </a>
            <a href="https://discord.com/channels/addicted9201" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-2xl hover:text-[var(--color-lighter)] transition" />
            </a>
            <a href="https://www.instagram.com/viatree/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-[var(--color-lighter)] transition" />
            </a>
            <a href="https://www.linkedin.com/in/vtaes/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-[var(--color-lighter)] transition" />
            </a>
          </div>
          <p className="text-center">&copy; VTAES. 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
