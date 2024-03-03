"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

type TabDataType = {
  title: string;
  id: string;
  content: JSX.Element;
};
const TAB_DATA: TabDataType[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid md:grid-cols-8 gap-2 pl-2">
        <li>Typescript</li>
        <li>NodeJs</li>
        <li>NestJs</li>
        <li>MySQL</li>
        <li>Docker</li>
        <li>Redis</li>
        <li>React</li>
        <li>NextJs</li>
        <li>GraphQL</li>
        <li>TypeORM</li>
        <li>Jotai</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="grid gap-2">
        <li>Computer engineering, UP</li>
        <li>Fullstack Bootcamp, Henry</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="grid gap-2">
        <li>Fullstack developer, Henry</li>
        <li>Frontend developer, CoderHouse</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className=" gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mb-12">
        <h5 className="text-xl font-bold text-white my-2">Who I am</h5>
        <p className="text-base lg:text-lg">
          I am a backend developer whose greater passions are learning and
          solving problems. I am a quick learner and I am always looking to
          expand my knowledge and skill set. I am a team player and I am excited
          to work with others to create amazing applications.
        </p>
      </div>
      <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
        <div className="flex flex-row justify-start mt-2">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
        </div>
        <div className="mt-2">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
