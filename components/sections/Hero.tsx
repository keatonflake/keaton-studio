import React from "react";
import Image from "next/image";
import { LinkedIn, GitHub, Resume } from "../(buttons)/Buttons";
import Widget from "../(widget)/Widget";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="grid grid-cols-1 my-16 md:my-24 md:grid-cols-2 lg:max-w-7xl mx-auto gap-4">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center text-center md:border-r-4 md:border-light h-full">
        <h2 className="text-2xl">Hello! I am</h2>
        <h1 className="text-6xl font-serif m-2">Keaton Flake</h1>
        <div className="flex justify-center items-center overflow-hidden w-72 h-72 rounded-full bg-blue border-4 border-light mx-auto">
          <Image
            className="object-cover"
            src="/images/profile.webp"
            width={600}
            height={600}
            priority
            alt="portrait of Keaton Flake"
          />
        </div>
        <div>
          {/* <SkillsAnimation /> */}
          <h1 className="text-4xl mt-5 font-serif sm:text-5xl md:text-4xl lg:text-5xl">
            Software Engineer
          </h1>
        </div>
        <button
          id="message"
          className="mt-5 border-yellow border-2 px-5 py-3 rounded-full"
          onClick={onOpenModal} // Trigger modal open on button click
        >
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
            <a href="#AboutMe" className="cursor-pointer text-yellow">
              Learn More
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center space-x-5 mb-10 mt-5">
          <Resume />
          <LinkedIn />
          <GitHub />
        </div>

        <Widget />
      </div>
    </div>
  );
};

export default Hero;
