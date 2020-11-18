import React from "react";
import Img from "gatsby-image";

const Card = ({ image, category, title, excerpt }) => (
  <article className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <Img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        fluid={image.childImageSharp.fluid}
        alt="blog"
      />
      <div className="p-6">
        <span className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
          {category}
        </span>
        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
          {title}
        </h3>
        <p className="leading-relaxed mb-3">{excerpt}</p>
        <div className="flex items-center flex-wrap ">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default Card;
