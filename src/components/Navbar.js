"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLeft = ["About me", "Resume"];
  const menuRight = ["Portofolio", "Contact"];

  const getPath = (label) => {
    const lower = label.toLowerCase();
    return lower === "about me" ? "/" : `/${lower}`;
  };

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF3E0] shadow-lg text-[var(--color-text)]"
          : "bg-transparent text-[var(--color-text)]"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-24 h-[80px]">
        {/* Menu Kiri */}
        <div className="hidden md:flex space-x-6">
          {menuLeft.map((item) => {
            const path = getPath(item);
            return (
              <Link href={path} key={item}>
                <span
                  className={`uppercase font-bold cursor-pointer transition-all ${
                    isActive(path)
                      ? "border-b-4 border-[var(--color-hover)] pb-1"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/greenlogo.png"
            width={150}
            height={60}
            alt="Vtaes Logo"
            priority
          />
        </div>

        {/* Menu Kanan */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuRight.map((item) => {
            const path = getPath(item);
            return (
              <Link href={path} key={item}>
                <span
                  className={`uppercase font-bold cursor-pointer transition-all ${
                    isActive(path)
                      ? "border-b-4 border-[var(--color-hover)] pb-1"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}

          {/* Language Switch */}
          <div
            className={`flex items-center p-1 rounded-3xl transition-all ${
              isScrolled
                ? "bg-white border-2 border-[var(--color-text)]"
                : "bg-transparent border border-white"
            }`}
          >
            {["ID", "EN"].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1 rounded-3xl text-sm font-semibold ${
                  language === lang
                    ? "bg-[var(--color-hover)] text-white"
                    : isScrolled
                    ? "text-[var(--color-text)]"
                    : "text-white"
                }`}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-4 px-4 bg-[#FAF3E0] text-[var(--color-text)]">
          {[...menuLeft, ...menuRight].map((item) => {
            const path = getPath(item);
            return (
              <Link href={path} key={item} onClick={() => setIsMobileMenuOpen(false)}>
                <span
                  className={`uppercase font-bold block text-center ${
                    isActive(path)
                      ? "border-b-2 border-[var(--color-hover)] pb-1"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}

          {/* Language Switch in Mobile */}
          <div className="flex items-center p-1 rounded-3xl border-2 border-[var(--color-text)]">
            {["ID", "EN"].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1 rounded-3xl text-sm font-semibold ${
                  language === lang
                    ? "bg-[var(--color-hover)] text-white"
                    : "text-[var(--color-text)]"
                }`}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
