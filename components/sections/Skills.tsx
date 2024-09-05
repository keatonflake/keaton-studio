import React, { Suspense } from "react";
import { FetchSkills } from "../../lib/fetchSkills";

interface Skill {
  _id: string;
  title: string;
  description: string;
  level: string;
  experience: string;
}

const SphereTemplate = React.lazy(
  () => import("../(skills-sphere)/SphereClient")
);

export default async function Skills() {
  const skills = await FetchSkills();

  // Convert ObjectId to a string
  const serializedSkills: Skill[] = skills.map((skill: any) => ({
    ...skill,
    _id: skill._id.toString(),
  }));

  return (
    <div className="mt-10 w-full lg:max-w-7xl mx-auto">
      <h1 className="text-4xl text-center font-serif py-2">Skills & Tools</h1>
      <div className="flex flex-col md:flex-row w-3/4 mx-auto">
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <SphereTemplate skills={serializedSkills} />
          </Suspense>
        </div>

        <span className="text-left"></span>

        <div className="mt-32 ml-10 w-1/3">
          <h2 className="text-lg text-yellow ">
            Click on an item for details:
          </h2>
        </div>
      </div>
    </div>
  );
}
