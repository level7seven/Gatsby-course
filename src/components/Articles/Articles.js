import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../Card/Card";

const query = graphql`
  query {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          category
          excerpt
          publishedat(formatString: "DD-MM-YYYY")
          thumbnail {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Articles = () => {
  const data = useStaticQuery(query);
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full justify-center items-center my-24">
          <h2 className="text-5xl">Articles</h2>
          <p className="text-2xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.allDatoCmsArticle.edges.map(({ node }) => {
            const { title, slug, excerpt, category, thumbnail } = node;
            return (
              <Card
                key={slug}
                category={category}
                image={thumbnail.fluid}
                title={title}
                excerpt={excerpt}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
