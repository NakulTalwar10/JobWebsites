import React from "react";
import "./First.css";
import backGround from "../../img/docusign-BbSBf5uv50A-unsplash.jpg";
import Typed from "react-typed";

const First = () => {
    return (
        <div
      className="background"
      style={{
        backgroundImage: `url(${backGround})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-center">
        {/* Heading */}
        <div className="my-6 mx-10 font-bold text-[white] md:text-[black] text-2xl md:text-4xl head heading text-center md:text-left">
          <h1>Getting Your</h1>
          <Typed strings={[" Dream Job"]} typeSpeed={60} backSpeed={60} loop={true} />
        </div>

        {/* Input Search Box */}
        <div className="max-w-lg w-full mt-6 md:mt-0 md:ml-4">
          <form className="flex">
            <input
              placeholder="Search Here"
              type="text"
              name="text"
              className="input p-2 w-full"
            />
            <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-green-600 transition-colors">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default First;
