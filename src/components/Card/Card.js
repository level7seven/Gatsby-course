import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Card = ({ image, category, title, excerpt, slug }) => (
  <article className="p-4 w-1/3">
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <Img
        className="h-48 h-36 w-full object-cover object-center"
        fluid={image}
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
          <Link
            to={slug}
            className="text-indigo-500 inline-flex items-center mb-0"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </article>
);

export default Card;
