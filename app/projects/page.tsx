"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "../components/ProjectTag";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Notes-api",
    description: "Nest.js | Ts | TypeORM | Zod | Swagger",
    image: "/images/projects/1.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/tamaraantonella/notes-api",
  },
  {
    id: 2,
    title: "My Cattle Log",
    description:
      "React  | Redux | NodeJS | Ts | Auth0 | Sequelize | PostgreSQL",
    image: "/images/projects/2.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/RobTangle/My-Cattle-Log",
  },
  {
    id: 3,
    title: "Foody App",
    description:
      "SPA | React | Redux | Ts | Js | NodeJS | Express | Sequelize | PostgreSQL",
    image: "/images/projects/3.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/tamaraantonella/PI-food-tamara",
  },
  {
    id: 4,
    title: "Árnica App",
    description: "SPA React | Firebase | React-router-dom",
    image: "/images/projects/4.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/tamaraantonella/arnica_app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
