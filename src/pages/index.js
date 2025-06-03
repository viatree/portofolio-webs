"use client";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import { StickyScrollRevealDemo } from "../components/StickyScroll";
import { HeroParallaxDemo } from "../components/HeroParallax";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center md:px-16 lg:px-24 xl:px-44 pt-30 bg-[var(--backg)] text-[var(--color-text)] min-h-screen">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/me.png"
            alt="Hero"
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>
        {/* KIRI - TEXT */}
        <div>
          <h1 className="text-[3rem] font-extrabold px-4">Via Tree Amay Erlikasna S</h1>
          <p className="mt-2 text-lg px-4">
            I have the ability to work collaboratively with cross-functional teams and communicate
            effectively with designers and backend developers. Furthermore, I always keep up with the
            latest trends and developments in the world of programming to stay up-to-date, and I have
            a strong desire to learn and upgrade my knowledge. I am enthusiastic about new things.
          </p>
          {/* Ikon Sosial Media */}
          <div className="flex gap-3 mt-4 px-4">
            <a
              className="border-2 border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              href="https://www.instagram.com/viatree/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="border-2 border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              href="https://github.com/viatree"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="border-2 border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              href="https://www.linkedin.com/in/vtaes/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="border-2 border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              href="https://discord.com/channels/addicted9201"
              target="_blank"
              aria-label="Discord"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Statistik */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 max-w-lg gap-6 px-4">
            <div>
              <h2 className="text-3xl font-bold">Web Designer</h2>
              <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
                <li>UI/UX</li>
                <li>SEO</li>
                <li>CMS</li>
                <li>Responsive</li>
                <li>Interactive web elements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold">UI/UX Designer</h2>
              <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
                <li>Wireframing and prototyping</li>
                <li>UX writing/writer</li>
                <li>Visual design</li>
                <li>Editing</li>
                <li>Research/audit</li>
                <li>Testing</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Fullstack Developer</h2>
              <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
                <li>Frontend and Backend</li>
                <li>Deployment</li>
                <li>CI/CD</li>
                <li>Adaptability</li>
                <li>Testing and Debugging</li>
                <li>Management System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <StickyScrollRevealDemo />
      <HeroParallaxDemo />
    </div>
  );
}
