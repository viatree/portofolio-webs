"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Fetch API",
    link: "https://fullapi-ga2a.vercel.app/",
    thumbnail: "/images/api.png",
  },
  {
    title: "GBI Rock Malaysia",
    link: "https://rock-church.vercel.app/home",
    thumbnail: "/images/rock.png",
  },
  {
    title: "Compro Mega Putra",
    link: "https://compro-mp.vercel.app/",
    thumbnail: "/images/mp.png",
  },
  {
    title: "Housings",
    link: "https://housings.vercel.app/",
    thumbnail: "/images/residence.png",
  },
  {
    title: "Train Schedules",
    link: "https://trainschedules.vercel.app/",
    thumbnail: "/images/train.png",
  },
  {
    title: "Eat Sushi",
    link: "https://sushi-orcin-two.vercel.app/",
    thumbnail: "/images/sushi.png",
  },
  {
    title: "UI/UX Mega Putra",
    link: "https://compro-mp.vercel.app/",
    thumbnail: "/images/uiuxmp.png",
  },
  {
    title: "Vis Movies",
    link: "https://vismovies.vercel.app/",
    thumbnail: "/images/movies.png",
  },
  {
    title: "CMS Programs",
    link: "https://programs-cms.netlify.app/#/dashboard",
    thumbnail: "/images/contract.png",
  },
  {
    title: "Kawaii Pet Shop",
    link: "https://66bf34af2e797708e0e44d7d--regal-phoenix-ebc719.netlify.app/",
    thumbnail: "/images/self project.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/images/elearn.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/images/ajinomoto.png",
  },
  {
    title: "Kawaii Pet Shop",
    link: "https://66bf34af2e797708e0e44d7d--regal-phoenix-ebc719.netlify.app/",
    thumbnail: "/images/self project.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/images/intern.png",
  },
  {
    title: "Belle Design Studio",
    link: "https://freelance-belle-design.vercel.app/",
    thumbnail: "/images/freelance.png",
  },
];
