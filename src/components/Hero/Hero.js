import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import AutorProfile from "../AuthorProfile/AuthorProfile";
import styles from "./hero.module.scss";

const query = graphql`
  query {
    imageSharp(fluid: { src: { regex: "/hero/" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const Home = () => {
  const data = useStaticQuery(query);
  return (
    <header
      className={`w-full bg-gray-900 h-screen flex justify-between ${styles.container}`}
    >
      <div className="w-1/2 flex justify-between flex-col">
        <div className="ml-20 mt-48">
          <h1 className="text-6xl font-semibold text-white">
            Create amazing <span className="text-blue-500">experience</span>
          </h1>
          <p className="font-medium text-gray-600 text-2xl">
            Hi! I’m Louis and I am professional photographer since 2001. I’m
            writing about cameras, design and photographer stuff
          </p>
          <NewsletterForm />
        </div>
        <AutorProfile />
      </div>
      <div className="w-1/2 justify-end flex">
        <Img
          fluid={data.imageSharp.fluid}
          className={`h-full w-4/5 ${styles.heroImage}`}
          alt="Man taking photo on stairs"
        />
      </div>
    </header>
  );
};

export default Home;
