import { FetchProjects } from "../../lib/fetchProjects";
import ProjectCarouselClient from "../(project-carousel)/ProjectCarouselClient";

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

  // Convert ObjectId to a string
  const serializedProjects: Project[] = projects.map((project: any) => ({
    ...project,
    _id: project._id.toString(),
  }));

  return (
    <div className=" my-20 w-full h-fit lg:max-w-7xl rounded-lg mx-auto">
      <h1 className="text-4xl text-center font-serif py-2 border-b-2 border-light">
        My Work
      </h1>

      <ProjectCarouselClient projects={serializedProjects} />
    </div>
  );
};

export default Projects;
