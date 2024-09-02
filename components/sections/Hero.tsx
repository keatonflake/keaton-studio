import { LinkedIn, GitHub, Resume } from "../(buttons)/Buttons";
import ProfileImage from "../(profile-box)/ProfileImage";
import Widget from "../(widget)/Widget";
// import SkillsAnimation from "../(skills-animation)/SkillsAnimation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-7xl mx-auto my-10 gap-4">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center text-center md:border-r-4 md:border-light h-full">
        <h2 className="text-2xl">Hello! I am</h2>
        <h1 className="text-6xl font-serif m-2">Keaton Flake</h1>
        <ProfileImage />
        <div>
          {/* <SkillsAnimation /> */}
          <h1 className="text-4xl mt-5 font-serif sm:text-5xl md:text-4xl lg:text-5xl">
            Software Engineer
          </h1>
        </div>
        <button className="mt-5 border-yellow border-2 px-5 py-3 rounded-full">
          Send a message
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-col items-center justify-center md:mt-20">
        <div className="flex-row w-80 md:w-96 text-lg text-center mx-auto">
          <p>
            I am driven by a deep passion for continuous learning, making a
            meaningful impact, and coding with best development methodologies
            and standards.{" "}
            <a className="cursor-pointer text-yellow">Learn More</a>
          </p>
        </div>

        <div className="flex justify-center items-center space-x-5 mb-10 mt-5">
          <Resume />
          <LinkedIn />
          <GitHub />
        </div>

        <div className="flex justify-center">
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Hero;
