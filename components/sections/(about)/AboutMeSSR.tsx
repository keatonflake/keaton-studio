import React from "react";
import { FetchProjects } from "@/lib/fetchProjects";

interface Project {
  _id: string;
  title: string;
  overview: string;
  why: string;
  images: { url: string }[];
  links: any[];
  tags: string[];
  key_features: string[];
  reflection: string;
  evaluation_scores: any[];
  card_description: string;
}

const Projects = async () => {
  const projects = await FetchProjects();

  const AboutMeSSR = () => {
    return (
      <div>
        <h1>About Me</h1>
      </div>
    );
  };
};

export default AboutMeSSR;
