import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "Venkatakrishnan R's Portfolio Background";

const description =
  "I'm a Computer Science and Engineering student with a focus on Artificial Intelligence at Amrita Vishwa Vidyapeetham, Chennai, India.";

const skillsList = [
  "Python",
  "Matlab",
  "C++",
  "Tensorflow",
  "Pytorch",
  // Add more skills here
];

const detailOrQuote =
  "I am passionate about leveraging my technical skills to develop innovative solutions. My experience in machine learning and AI drives me to make technology more accessible and impactful.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
