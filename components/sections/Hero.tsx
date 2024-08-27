import { LinkedIn } from "../(buttons)/Buttons";
import ProfileImage from "../(profile-box)/ProfileImage";
// import SkillsAnimation from "../(skills-animation)/SkillsAnimation";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full my-10">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center text-center border-r-4 border-light pr-4">
        <h2 className="text-2xl">Hello! I am</h2>
        <h1 className="text-6xl font-serif m-2">Keaton Flake</h1>
        <ProfileImage />
        <div>
          {/* <SkillsAnimation /> */}
          <h1 className="text-3xl">Software Engineer</h1>
        </div>
        <button className="mt-5 border-yellow border-2 p-5 rounded-full">
          Send a message
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center">
        <p>
          I am driven by a deep passion for continuous learning, making a
          meaningful impact, and coding with best development methodologies and
          standards.
        </p>
        <LinkedIn />
      </div>
    </div>
  );
};

export default Hero;
