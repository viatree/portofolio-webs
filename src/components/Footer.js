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
    <footer className="bg-[var(--beige)] text-black py-6 px-8 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-base">
          {/* Logo - kiri */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/logo.png"
              alt="vtaes Logo"
              width={200}
              height={100}
             
            />
         
          </div>

          {/* Contact Us - tengah */}
          <div className="flex flex-col items-start space-y-3 text-[var(--color-text)]">
            <h3 className="text-lg font-bold">INFO CONTACT</h3>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-2xl" />
              <p>+6281381376027</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-2xl" />
              <p>+601114859893 (Wa Only)</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMailBulk className="text-2xl" />
              <p>Viathree01@gmail.com</p>
            </div>
          </div>

          {/* Quick Links - kanan */}
          <div className="flex flex-col items-start space-y-2 text-[var(--color-text)] ">
            <h3 className="text-lg font-bold mb-2 text-[var(--color-text)]">QUICK LINKS</h3>
            <Link href="/index" className="hover:text-[var(--color-lighter)]">About Me</Link>
            <Link href="/Resume" className="hover:text-[var(--color-lighter)]">Services</Link>
            <Link href="/portofolio" className="hover:text-[var(--color-lighter)]">Feed</Link>
            <Link href="/contact" className="hover:text-[var(--color-lighter)]">Contact</Link>
          </div>
        </div>

        {/* Garis pemisah */}
        <div className="border-t border-[var(--color-text)] w-full my-6"></div>

        {/* Social Media dan Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[var(--color-text)]">
          <div className="flex space-x-6">
            <FaGithub className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaDiscord className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          </div>
          <p className="text-sm">&copy; VTAES. 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
