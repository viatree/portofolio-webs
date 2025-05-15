import { useState } from "react";

export default function Projects() {
  const categories = [
    "Web Designer",
    "UI/UX Designer",
    "Fullstack Developer ",
    "Support",
  ];

  const allProjects = [
    { src: "/images/p1.png", category: "Web Designer" },
    { src: "/images/p2.png", category: "Support" },
    { src: "/images/p3.png", category: "Fullstack Developer " },
    { src: "/images/p4.png", category: "UI/UX Designer" },
    { src: "/images/p3.png", category: "Fullstack Developer " },
    { src: "/images/p2.png", category: "Support" },
    { src: "/images/p4.png", category: "UI/UX Designer" },
    { src: "/images/p1.png", category: "Web Designer" },
    { src: "/images/p2.png", category: "Support" },
    { src: "/images/p1.png", category: "Web Designer" },
    { src: "/images/p3.png", category: "Fullstack Developer" },
    { src: "/images/p4.png", category: "UI/UX Designer" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

      const categoryDescriptions = {
        "All":
          "Explore our complete range of packaging projects across industries",
        "Web Designer":
          "Premium packaging for cosmetics, skincare, haircare, and personal care brands.",
        "UI/UX Designer":
          "Custom packaging solutions for Support products, healthcare, and compliance needs.",
        "Fullstack Developer ":
          "High-volume packaging for food, beverages, and other fast-moving consumer goods, including retail and restaurant brands.",
        "Support":
          "Custom packaging solutions for Support products, healthcare, and compliance needs.",
      };

  return (
    <>
     
      <section className=" flex flex-col items-left justify-center md:px-16 lg:px-24 xl:px-44 pt-30 bg-[var(--backg)] text-[var(--color-text)]">
      <h1 className="text-3xl font-bold text-left my-2 text-[var(--color-primary)]">
        Packaging Solutions for every industry
        </h1>
        <h2 className="text-start text-justify text-[var(--color-text)]">
        With decades of experience in packaging, Mega Putra partners with leading brands across a wide range of industries. Our packaging solutions are designed to meet the functional, regulatory, and aesthetic needs of each market — ensuring brand consistency and high-quality execution.
        </h2>
         {/* Filter Tabs */}
         <p className="text-left text-md font-semibold text-[var(--color-text)] mt-2">
  {categoryDescriptions[selectedCategory]}
</p>


        <div className="mt-6 flex justify-between border-b-3 border-[var(--color-lighter)]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`pb-2 text-[var(--color-text)] hover:text-[var(--color-primary)] ${
                selectedCategory === category
                  ? "font-bold border-[var(--color-primary)] text-[var(--color-primary)]"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-auto h-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative group">
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className="w-full h-auto shadow-lg max-w-screen overflow-hidden"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}