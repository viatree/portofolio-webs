import { useState } from "react";

export default function Projects() {
  const categories = ["All", "Web Design", "UI/UX Design", "Fullstack"];

  const allProjects = [
    {
      src: "/images/thumbnails/mp.png",
      category: "Fullstack",
      link: "https://compro-mp.vercel.app/",
    },
     {
      src: "/images/elearn.png",
      category: "UI/UX Design",
      link: "https://www.figma.com/proto/4Ips3J5hzX4Ma80jVDCqNS/Wireframe?page-id=303%3A117&node-id=305-41811&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=304%3A5248&t=fu4vsDvUQmGFmWzi-1",
    },
    {
      src: "/images/thumbnails/belle.png",
      category: "Web Design",
      link: "https://freelance-belle-design.vercel.app/",
    },
    {
      src: "/images/thumbnails/train.png",
      category: "Fullstack",
      link: "https://trainschedules.vercel.app/",
    },
    {
      src: "/images/intern.png",
      category: "UI/UX Design",
      link: "https://www.figma.com/proto/hhH1VM6eEdTVUeFr7er4a2/Banner?page-id=0%3A1&node-id=6-19&viewport=397%2C349%2C0.17&t=6eBSCJ0WoUek30N1-1&scaling=min-zoom&content-scaling=fixed",
    },
    {
      src: "/images/thumbnails/pet.png",
      category: "Fullstack",
      link: "https://66bf34af2e797708e0e44d7d--regal-phoenix-ebc719.netlify.app/",
    },
    {
      src: "/images/ajinomoto.png",
      category: "UI/UX Design",
      link: "https://www.figma.com/proto/4Ips3J5hzX4Ma80jVDCqNS/Wireframe?page-id=15%3A592&node-id=304-8041",
    },
    {
      src: "/images/thumbnails/housings.png",
      category: "Web Design",
      link: "https://housings.vercel.app/",
    },
    {
      src: "/images/thumbnails/sushi.png",
      category: "Web Design",
      link: "https://sushi-orcin-two.vercel.app/",
    },
     {
      src: "/images/apps.png",
      category: "UI/UX Design",
      link: "https://yourwebsite.com/project-uiux3",
    },
    {
      src: "/images/thumbnails/api.png",
      category: "Fullstack",
      link: "https://yourwebsite.com/project-api",
    },
    {
      src: "/images/uiuxmp.png",
      category: "UI/UX Design",
      link: "https://yourwebsite.com/project-uiux3",
    },
    {
      src: "/images/thumbnails/movies.png",
      category: "Web Design",
      link: "https://yourwebsite.com/project-movies",
    },
    {
      src: "/images/thumbnails/cms.png",
      category: "Fullstack",
      link: "https://yourwebsite.com/project-cms",
    },
      {
      src: "/images/rock.png",
      category: "UI/UX Design",
      link: "https://yourwebsite.com/project-uiux3",
    },
    {
      src: "/images/thumbnails/gbi.png",
      category: "Web Design",
      link: "https://yourwebsite.com/project-gbi",
    },
     {
      src: "/images/self project.png",
      category: "UI/UX Design",
      link: "https://yourwebsite.com/project-uiux3",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const categoryDescriptions = {
    All: "Here are some of the projects I’ve worked on, showcasing a variety of design and development skills.",
    "Web Design":
      "As a Web Designer, I focus on creating visually appealing and responsive websites that provide a great user experience.",
    "UI/UX Design":
      "In my role as a UI/UX Designer, I design intuitive interfaces and seamless user experiences to improve product usability.",
    Fullstack:
      "As a Fullstack Developer, I handle both frontend and backend development, building complete and functional web applications.",
  };

  return (
    <section className="flex flex-col items-left justify-center md:px-16 lg:px-24 xl:px-44 pt-30 bg-[var(--backg)] text-[var(--color-text)]">
      <h1 className="text-3xl font-bold text-left my-2 text-[var(--color-primary)]">
        My Projects
      </h1>
      <h2 className="text-start text-justify text-[var(--color-text)]">
        Explore a selection of my work across web design, UI/UX, and fullstack development.
      </h2>

      <p className="text-left text-md font-semibold text-[var(--color-text)] mt-2">
        {categoryDescriptions[selectedCategory]}
      </p>

      {/* Filter Tabs */}
      <div className="mt-6 flex justify-between gap-4 border-b-3 border-[var(--color-lighter)] ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1  hover:text-[var(--color-primary)] ${
              selectedCategory === category
                ? "font-bold text-[var(--color-primary)] border-[var(--color-primary)]"
                : "text-[var(--color-text)]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    
      {/* Project Grid */}
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative group cursor-pointer">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className={`w-full transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl cursor-pointer ${
                  project.category === "UI/UX Design"
                    ? "h-[170px] object-cover"
                    : "h-auto"
                }`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
