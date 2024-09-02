// import { fetchProjects } from "../../lib/fetchProjects";
// import Image from "next/image";

// export default async function ProjectCard() {
//   const projects = await fetchProjects();

//   return (
//     <div className="project-card">
//       <Image
//         src={projects[0].images[0].url}
//         width={200}
//         height={400}
//         priority
//         alt="cover image of project"
//       />
//       <div className="details-box">
//         <h1 className="text-md text-light">{projects[0].title}</h1>
//       </div>
//     </div>
//   );
// }

// components/ProjectCards.tsx
import { fetchProjects } from "../../lib/fetchProjects";
import ProjectCarouselClient from "./ProjectCarouselClient";

// Define the project type, ensuring _id is a string
interface Project {
  _id: string;
  title: string;
  overview: string;
  why: string;
  images: { url: string }[];
  links: any[]; // Define the type based on your structure
  tags: string[];
  key_features: string[];
  reflection: string;
  evaluation_scores: any[]; // Define the type based on your structure
}

export default async function ProjectCarouselSSR() {
  const projects = await fetchProjects();

  // Convert ObjectId to a string
  const serializedProjects: Project[] = projects.map((project: any) => ({
    ...project,
    _id: project._id.toString(),
  }));

  return <ProjectCarouselClient projects={serializedProjects} />;
}
