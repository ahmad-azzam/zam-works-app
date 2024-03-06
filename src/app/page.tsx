import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import Project from "@/components/landing-page/project";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default Home;
