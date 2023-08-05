import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/1676957381259.jpg"; // replace with your image

const imageAltText = "Venkatakrishnan R's Portfolio Background";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Venkatakrishnan R",
  title: "AI and Machine Learning Enthusiast",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
