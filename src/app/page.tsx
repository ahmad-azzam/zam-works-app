import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import Project from "@/components/landing-page/project";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Project />
    </main>
  );
};

export default Home;
