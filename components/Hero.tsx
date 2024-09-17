import { FiDownload } from "react-icons/fi";

import MagicButton from "./MagicButton";
import { AnimatedModalDemo } from "./AnimatedModalDemo";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Constructing Intricate UI/UX From The Ground Up"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Cody, a DevOps Engineer based in the US.
          </p>

          <a href="#about">
            <MagicButton
              title="Resume"
              icon={<FiDownload />}
              position="right"
            />
          </a>
          {/* <a href="#">
            <AnimatedModalDemo />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
