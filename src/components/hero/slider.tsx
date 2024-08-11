"use client";

import Javascript from "@/assets/slider/javascript.svg";
import Typescript from "@/assets/slider/typescript.svg";
import Nest from "@/assets/slider/nestjs.svg";
import Node from "@/assets/slider/node.svg";
import Next from "@/assets/slider/next.svg";
import React from "@/assets/slider/reactjs.svg";
import Tailwind from "@/assets/slider/tailwind.svg";
import Sass from "@/assets/slider/scss.svg";
import Mongo from "@/assets/slider/mongo.svg";
import MySQL from "@/assets/slider/mysql.svg";
import Git from "@/assets/slider/git.svg";
import Docker from "@/assets/slider/docker.svg";
import { useEffect, useState } from "react";
import SliderColumn from "./sliderColumn";

const slideItems = [
  <Javascript key={1} />,
  <Typescript key={2} />,
  <Nest key={3} />,
  <Node key={4} />,
  <Next key={5} />,
  <React key={6} />,
  <Tailwind key={7} />,
  <Sass key={8} />,
  <Mongo key={9} />,
  <MySQL key={10} />,
  <Git key={11} />,
  <Docker key={12} />,
];

const randomizer = () => Math.random() - 0.5;

export default function Slider() {
  const [leftItems, setLeftItems] = useState(slideItems);
  const [rightItems, setRightItems] = useState(slideItems);

  useEffect(() => {
    setLeftItems(() => [...slideItems].sort(randomizer));
    setRightItems(() => [...slideItems].sort(randomizer));
  }, []);

  return (
    <div className="relative flex max-h-[600px] overflow-hidden">
      <div className="absolute top-0 z-40 h-10 w-full bg-gradient-to-b from-white to-transparent"></div>
      <SliderColumn
        items={leftItems}
        initialY={0}
        animateY={"-100%"}
        duration={15}
      />
      <SliderColumn
        items={rightItems}
        initialY={"-100%"}
        animateY={0}
        duration={12}
      />
      <div className="absolute bottom-0 z-40 h-10 w-full bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
