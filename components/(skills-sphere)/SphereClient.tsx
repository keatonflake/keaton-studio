"use client";

import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

interface TagCloudOptions {
  radius: number;
  maxSpeed: "slow" | "normal" | "fast";
  initSpeed: "slow" | "normal" | "fast";
  keep: boolean;
}

interface Skill {
  title: string;
  description: string;
  level: string;
  experience: string;
}

interface SkillsClientProps {
  skills: Skill[];
}

const tagCloudOptions = (w: Window & typeof globalThis): TagCloudOptions => ({
  radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
  maxSpeed: "fast",
  initSpeed: "fast",
  keep: true,
});

const SphereTemplate: React.FC<SkillsClientProps> = ({ skills }) => {
  const renderDetails = (skill: Skill) => {
    let title = document.querySelector("#title");
    let level = document.querySelector("#level");
    let experience = document.querySelector("#experience");

    title!.innerHTML = skill.title;
    level!.innerHTML = skill.level;
    experience!.innerHTML = skill.experience;
  };
  return (
    <div className="flex flex-col md:flex-row items-center">
      <TagCloud
        options={tagCloudOptions}
        onClick={(tag: string, ev: MouseEvent) => {
          const selectedSkill = skills.find((skill) => skill.title === tag);
          if (selectedSkill) {
            renderDetails(selectedSkill);
          }
        }}
        onClickOptions={{ passive: true }}
      >
        {skills.map((skill: Skill) => skill.title)}
      </TagCloud>

      <div className="mt-6 w-full px-4 md:mt-0 md:ml-10 md:w-1/2">
        {/* <h2 className="text-xl text-yellow w-full text-center">
          Click on an item for details:
        </h2> */}
        <h1
          className="text-center md:text-center text-4xl text-yellow font-sans w-full"
          id="title"
        >
          Click on an item for details:
        </h1>
        <h2 className="text-yellow text-2xl mt-2">
          Level: <span id="level" className="text-white"></span>
        </h2>
        <h3
          id="experience"
          className="flex flex-col md:block md:text-center text-xl mt-2"
        >
          {/* <span className="text-white text-lg md:text-left md:ml-1"></span> */}
        </h3>
      </div>
    </div>
  );
};

export default SphereTemplate;
