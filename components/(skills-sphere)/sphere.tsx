"use client";

import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

interface TagCloudOptions {
  radius: number;
  maxSpeed: "slow" | "normal" | "fast";
  initSpeed: "slow" | "normal" | "fast";
  keep: boolean;
}

const Sphere = () => (
  <TagCloud
    className="text-yellow"
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    })}
    onClick={(tag: string, ev: MouseEvent) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
      "VSCode",
      "TypeScript",
      "React",
      "Preact",
      "Parcel",
      "Jest",
      "Next",
      "ESLint",
      "Framer Motion",
      "Three.js",
    ]}
  </TagCloud>
);

export default Sphere;
