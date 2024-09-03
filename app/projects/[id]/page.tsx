import { ObjectId } from "mongodb";
import { fetchProjects } from "../../../lib/fetchProjects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  params: {
    id: string;
  };
}

interface KeyFeature {
  feature: string;
  description: string;
}

interface Links {
  live_project: string;
  github: string;
}

interface Project {
  _id: ObjectId;
  title: string;
  overview: string;
  key_features: KeyFeature[];
  links: Links;
}

const ProjectPage = async ({ params }: ProjectProps) => {
  const { id } = params;

  const objectId = new ObjectId(id);

  const projects = await fetchProjects();

  const project = projects.find(
    (project) => project._id.toString() === objectId.toString()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="text-center w-5/6 mx-auto">
      <h1 className="text-5xl font-serif">{project.title}</h1>

      <div className="flex flex-row items-center justify-center space-x-5">
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center gap-2 mt-5 border-yellow border-2 px-3 py-2 rounded-full">
            GitHub Code <FaGithub size="2em" color="white" />
          </button>
        </a>

        <a
          href={project.links.live_project}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-5 bg-yellow text-dark px-8 py-3 rounded-full">
            Try It Live
          </button>
        </a>
      </div>

      <p className="mt-5 w-2/3 mx-auto">{project.overview}</p>

      <h1 className="text-3xl mt-5 font-serif">Key Features</h1>

      <div className="flex flex-wrap justify-center space-x-1 h-1/2">
        {project.key_features.map((key_feature: KeyFeature) => (
          <h2 key={key_feature.feature}>
            <span className="font-bold text-yellow mr-1">
              {key_feature.feature}:
            </span>
            {key_feature.description}
          </h2>
        ))}
      </div>

      <h1 className="text-3xl mt-5 font-serif">Why I Built It</h1>
      <p>{project.why}</p>

      <Image
        src={project.images[0].url}
        width={500}
        height={300}
        alt={`Image of ${project.title}`}
      />
    </div>
  );
};

export default ProjectPage;
