import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import styles from "./hero.module.scss";

const Home = () => (
  <header
    className={`w-full bg-gray-900 h-screen flex justify-between ${styles.container}`}
  >
    <div className="w-1/2 flex justify-between flex-col">
      <div className="ml-20 mt-48">
        <h1 className="text-6xl font-semibold text-white">
          Create amazing <span className="text-blue-500">experience</span>
        </h1>
        <p className="font-medium text-gray-600 text-2xl">
          Hi! I’m Louis and I am professional photograper since 2001. I’m
          writing about cameras, design and photographer stuff
        </p>
        <NewsletterForm />
      </div>
      <div className="flex ml-20 mb-6 items-center">
        <img
          src="https://randomuser.me/api/portraits/men/47.jpg"
          className="h-16 w-16 rounded-full mr-2"
          alt=""
        />
        <div>
          <p className="text-white font-medium">Louis Edwards</p>
          <p className="text-gray-500">Photographer, design lover</p>
        </div>
      </div>
    </div>
    <div className="w-1/2 justify-end flex">
      <img
        src="https://images.unsplash.com/photo-1592901571648-179db177fdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        className={`h-full w-4/5 ${styles.heroImage}`}
        alt="Man taking photo of mountain"
      />
    </div>
  </header>
);

export default Home;
