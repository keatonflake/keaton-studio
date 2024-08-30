import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/keaton-flake/">
      <IoLogoLinkedin color="white" size="2em" />
    </a>
  );
};

export const GitHub = () => {
  return (
    <a href="https://github.com/keatonflake">
      <FaGithub color="white" size="2em" />
    </a>
  );
};

export const Resume = () => {
  return (
    <a href="https://github.com/keatonflake">
      <button className="rounded-full bg-blue border-2 border-light px-3 py-1">
        Resume
      </button>
    </a>
  );
};
