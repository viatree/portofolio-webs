"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Web Designer",
    description: (
      <div className="flex flex-wrap gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-25 w-20" alt="html5 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-25 w-20" alt="css3 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="h-25 w-20" alt="bootstrap logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className="h-25 w-20" alt="jquery logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-25 w-20" alt="javascript logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-25 w-20" alt="react logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" className="h-25 w-20" alt="wordpress logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" className="h-25 w-20" alt="threejs logo" />
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  
  {
    title: "Fullstack Developer",
    description: (
      <div className="flex flex-wrap gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-25 w-20"alt="nextjs logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="h-25 w-20"alt="androidstudio logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="h-25 w-20"alt="firebase logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-25 w-20"alt="mysql logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" className="h-25 w-20"alt="sqlite logo" />
       
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "UI/UX Designer",
    description: (
      <div className="flex flex-wrap gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="h-25 w-20"alt="canva logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-25 w-20"alt="figma logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" className="h-25 w-20"alt="xd logo" />
      </div>
    ),
  },

  {
    title: "CI/CD",
    description: (
      <div className="flex flex-wrap gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="h-25 w-20"alt="npm logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-25 w-20"alt="git logo" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="h-25 w-20"alt="github logo" />
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" className="h-25 w-20"alt="gitlab logo" />
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Others",
    description: (
      <div className="flex flex-wrap items-center gap-2">
        {/* Spreadsheet */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="h-8 w-8" alt="google sheets logo" />
  
        {/* Tailwind */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="h-8 w-8" alt="tailwind logo" />
  
        {/* Wireframes (Figma as proxy) */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-8 w-8" alt="figma (wireframe) logo" />
  
        {/* Operating System (Linux example) */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="h-8 w-8" alt="linux logo" />
  
        {/* Networking (use generic network icon SVG or FontAwesome if available) */}
        <img src="https://www.svgrepo.com/show/426874/network-networking.svg" className="h-8 w-8" alt="network icon" />
  
        {/* CMD / Terminal */}
        <img src="https://www.svgrepo.com/show/331760/terminal.svg" className="h-8 w-8" alt="terminal icon" />
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Tools
      </div>
    ),
  },
  
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full w-screen py-16 ">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-left mb-4 text-[var(--color-text)]  md:px-16 lg:px-24 xl:px-44">
       Technologies I use.
      </h1>

      {/* Keterangan */}
      <h2 className="text-left text-[var(--color-text)] md:px-16 lg:px-24 xl:px-44 text-[24px]">
       Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
      </h2>

      {/* Sticky Scroll Section */}
      <StickyScroll content={content} />
    </div>
  );
}

