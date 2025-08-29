"use client";

import { useState } from "react";
import MagicButton from "./MagicButton";
// import { AnimatedModalDemo } from "./AnimatedModalDemo";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-[100vh] pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="yellow"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Move content up a bit more on mobile */}
      <div className="flex justify-center relative my-2 md:my-4 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words={
              <>
                Intricate <span className="text-green">UI/UX</span> Built From The Ground Up
              </>
            }
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          {/* <p className="w-[75%] text-center md:tracking-wider mb-8 mt-4 text-sm md:text-lg lg:text-2xl leading-7">
            Hi! I&apos;m Cody, an experienced <span className="text-green"> Developer </span> with expertise in all of the best practices in <span className="text-green"> DevOps </span> Engineering
          </p> */}
          <MagicButton
            title="Resume"
            icon={<FiDownload />}
            position="right"
            handleClick={() => {
              const link = document.createElement("a");
              link.href = "/portfolio/data/resume.pdf";
              link.download = "resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
