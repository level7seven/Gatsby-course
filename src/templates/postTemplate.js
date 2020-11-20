import React from "react";
import Img from "gatsby-image";
import styles from "./postTemplate.module.scss";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        category
        image {
          childImageSharp {
            fixed(quality: 100, width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { image, category, title, date } = frontmatter;
  return (
    <article className="mx-auto flex flex-col w-full justify-center items-center my-24 max-w-3xl">
      <div className="flex w-full justify-start	items-start my-24">
        <Img
          className="object-cover object-center rounded-lg"
          fixed={image.childImageSharp.fixed}
          alt=""
        />
        <div className="flex flex-col m-3 mx-6 justify-start	items-start">
          <span className="text-blue-600">{category}</span>
          <h1 className="text-3xl">{title}</h1>
          <span>{date}</span>
        </div>
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
};

export default PostTemplate;
