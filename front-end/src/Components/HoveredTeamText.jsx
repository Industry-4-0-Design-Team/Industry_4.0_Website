/* eslint-disable react/display-name */
import React from "react";

const HoveredText = React.memo(({ name, jobPosition }) => (
  <div
    data-aos="zoom-in"
    data-aos-offset="50"
    data-aos-delay="150"
    data-aos-duration="700"
    data-aos-once="trie"
  >
    <h1 className="text-4xl font-bold text-white vertical-text transition-all duration-300 ease-in-out">
      {name || "Our Team"}
    </h1>
    <h2 className="text-xl text-white vertical-text transition-all duration-300 ease-in-out">
      {jobPosition || "Making it all happen"}
    </h2>
  </div>
));

export default HoveredText;
