import React from "react";
import Hero from "../components/Hero/Hero";
import Articles from "../components/Articles/Articles";
import About from "../components/About/About";
import SEO from "../components/SEO/SEO";

const Home = () => (
  <>
    <SEO />
    <Hero />
    <Articles />
    <About />
  </>
);

export default Home;
