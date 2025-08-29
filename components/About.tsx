import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen flex flex-col justify-center items-center bg-black-100 text-white p-8">
        <TextGenerateEffect
            words={
              <>
                A Bit About Me 
              </>
            }
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
          />
        <p className="w-[75%] text-center md:tracking-wider mb-8 mt-4 text-sm md:text-lg lg:text-2xl leading-7">I’m <span className="text-green">Cody Gibbs,</span> a versatile DevOps with a strong foundation in both frontend and backend technologies. I specialize in building seamless and scalable applications, leveraging tools like <span className="text-green">Docker, Kubernetes, v0, Linux,</span> and more. With hands-on experience designing REST APIs, gRPC & WebRTC systems, managing databases, and integrating <span className="text-green">CI/CD</span> pipelines, I thrive in creating efficient solutions that connect systems and enhance user experiences. My background includes supporting enterprise IT environments, <span className="text-green">automation engineering,</span> and troubleshooting at scale, giving me a unique blend of problem-solving and development expertise. Always eager to grow, alway <span className="text-green">advancing my skills,</span> and always delivering the best possible product.</p>
    </div>
  )
}

export default About