import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/keaton-flake/"
      className="cursor-pointer"
    >
      <IoLogoLinkedin color="white" size="3em" />
    </a>
  );
};

export const GitHub = () => {
  return (
    <a href="https://github.com/keatonflake" className="cursor-pointer">
      <FaGithub color="white" size="3em" />
    </a>
  );
};

export const Resume = () => {
  return (
    <a href="https://github.com/keatonflake">
      <button className="rounded-full bg-blue border-2 text-2xl font-serif cursor-pointer border-light px-3 py-1">
        Resume
      </button>
    </a>
  );
};
