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

const SphereTemplate: React.FC<SkillsClientProps> = ({ skills }) => {
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      })}
      onClick={(tag: string, ev: MouseEvent) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {skills.map((skill: Skill) => skill.title)}
    </TagCloud>
  );
};

export default SphereTemplate;
