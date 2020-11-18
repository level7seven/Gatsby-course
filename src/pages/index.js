import React from "react";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";

const Home = () => (
  <>
    <Hero />
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  </>
);

export default Home;
