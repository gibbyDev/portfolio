"use client";

<<<<<<< HEAD
import MagicButton from "./MagicButton";
// import { AnimatedModalDemo } from "./AnimatedModalDemo";
=======
import { useState } from "react";
import Modal from "./ui/Modal";
>>>>>>> 30dbb95 (new)
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words={
              <>
                Intricate <span className="text-green">UI/UX</span> Built From The Ground Up
              </>
            }
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="w-[75%] text-center md:tracking-wider mb-8 mt-8 text-sm md:text-lg lg:text-2xl leading-7">
          Hi! I&apos;m Cody, an experienced <span className="text-green"> Developer </span> with expertise in all of the best practices in <span className="text-green"> DevOps </span> Engineering
          </p>

<<<<<<< HEAD
          {/* <AnimatedModalDemo> */}
            <MagicButton
              title="Resume"
              icon={<FiDownload />}
              position="right"
            />
          {/* </AnimatedModalDemo> */}
=======
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="button-gradient px-5 py-2.5 rounded-lg text-white font-medium transition-all hover:scale-105"
            >
              Resume
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="p-4 w-full h-[80vh]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Resume</h2>
                  <button
                    onClick={() =>
                      window.open("/path-to-your-resume.pdf", "_blank")
                    }
                    className="px-4 py-2 bg-green text-white rounded-md hover:bg-green/90 transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
                <iframe
                  src="/path-to-your-resume.pdf#view=FitH"
                  className="w-full h-full rounded-md"
                  title="Resume"
                />
              </div>
            </Modal>
          </div>
>>>>>>> 30dbb95 (new)
        </div>
      </div>
    </div>
  );
};

export default Hero;
