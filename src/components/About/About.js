import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./about.module.scss";

const query = graphql`
  query {
    datoCmsAbout {
      heading
      aboutMe
      author {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      socialLinks {
        ... on DatoCmsPortfolio {
          id
          portfolioLink
        }
        ... on DatoCmsTwitter {
          id
          twitterLink
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const { heading, aboutMe, author, socialLinks } = data.datoCmsAbout;
  return (
    <section
      className={`w-screen h-screen bg-gray-900 mt-48 flex ${styles.container}`}
    >
      <div className="h-full w-full">
        <Img fluid={author.fluid} className="h-full w-full" alt="" />
      </div>
      <div className="py-32	px-20">
        <h2 className="text-6xl font-semibold text-white mb-20">{heading}</h2>
        <p className="font-medium text-gray-600 text-2xl mb-20 w-8/12 leading-relaxed">
          {aboutMe}
        </p>
        <div className="flex">
          <a
            href={socialLinks[0].portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-center w-40 mr-12 bg-gray-100 text-black rounded-md px-5 py-3"
          >
            Portfolio
          </a>
          <a
            href={socialLinks[1].twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-center w-40 bg-gray-700 text-white rounded-md px-5 py-3"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
