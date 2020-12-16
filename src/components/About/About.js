import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
  query {
    imageSharp(fluid: { src: { regex: "/louise-edwards-with-camera/" } }) {
      fluid {
        src
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  return (
    <section className="w-screen h-screen bg-gray-900	 flex">
      <Img fluid={data.imageSharp.fluid} className="h-full w-1/2" alt="" />
      <div className="py-32	px-20">
        <h2 className="text-6xl font-semibold text-white mb-20">
          Hi, I’m <span className="text-blue-500">Luise!</span>
        </h2>
        <p className="font-medium text-gray-600 text-2xl mb-20 w-8/12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <p className="font-medium text-gray-600 text-2xl mb-20 w-8/12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <div className="flex">
          <button className="text-xl w-40 mr-12 bg-gray-100 text-black rounded-md px-5 py-3">
            Portfolio
          </button>
          <button className="text-xl w-40 bg-gray-700 text-white rounded-md px-5 py-3">
            Twitter
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
