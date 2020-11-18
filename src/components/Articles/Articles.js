import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../Card/Card";

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
          }
          excerpt
        }
      }
    }
  }
`;

const Articles = () => {
  const data = useStaticQuery(query);
  console.log(data.allMarkdownRemark.edges);
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full justify-center items-center my-24">
          <h2 className="text-5xl">Articles</h2>
          <p className="text-2xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.allMarkdownRemark.edges.map(
            ({ node: { frontmatter, excerpt } }) => {
              const { category, image, title } = frontmatter;
              return (
                <Card
                  category={category}
                  image={image}
                  title={title}
                  excerpt={excerpt}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
