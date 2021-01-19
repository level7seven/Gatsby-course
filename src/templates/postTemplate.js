import React from "react";
import Img from "gatsby-image";
import styles from "./postTemplate.module.scss";
import { graphql } from "gatsby";
import SEO from "../components/SEO/SEO";

export const query = graphql`
  query($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      slug
      title
      category
      content
      thumbnail {
        fixed(width: 200, height: 200) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      publishedat(formatString: "DD-MM-YYYY")
    }
  }
`;

const PostTemplate = ({ data }) => {
  const {
    title,
    category,
    content,
    thumbnail,
    publishedat,
  } = data.datoCmsArticle;

  return (
    <>
      <SEO
        title={title}
        description={content}
        image={thumbnail.src}
        type="article"
      />
      <article className="mx-auto flex flex-col w-full justify-center items-center my-24 max-w-3xl">
        <div className="flex w-full justify-start	items-start my-24">
          <Img
            className="object-cover object-center rounded-lg"
            fixed={thumbnail.fixed}
            alt=""
          />
          <div className="flex flex-col m-3 mx-6 justify-start	items-start">
            <span className="text-blue-600">{category}</span>
            <h1 className="text-3xl">{title}</h1>
            <span>{publishedat}</span>
          </div>
        </div>
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </>
  );
};

export default PostTemplate;
