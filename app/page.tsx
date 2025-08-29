"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Intro from "@/components/Intro";
import About from "@/components/About";
// import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex overflow-x-hidden top-0 justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <AnimatedModalDemo /> */}
        <Hero />
        <Grid />
        <Intro />
        <About />
        {/* <Clients /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
