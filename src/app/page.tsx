import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
};

export default Home;
