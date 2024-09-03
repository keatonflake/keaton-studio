import { fetchSkills } from "../../lib/fetchSkills";
import SphereTemplate from "./SphereClient";

interface Skill {
  _id: string;
  title: string;
  description: string;
  level: string;
  experience: string;
}

export default async function SkillsSSR() {
  const skills = await fetchSkills();

  // Convert ObjectId to a string
  const serializedSkills: Skill[] = skills.map((skill: any) => ({
    ...skill,
    _id: skill._id.toString(),
  }));

  return <SphereTemplate skills={serializedSkills} />;
}
