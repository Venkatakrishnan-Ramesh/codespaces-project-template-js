import React from "react";
import image from "../images/1676957381259.jpg"; // replace with your image

const imageAltText = "Venkatakrishnan R's Portfolio Background";

const projectList = [
  {
    title: "AI Project 1",
    url: "https://github.com/yourusername/AI-Project-1",
  },
  {
    title: "Machine Learning Project 2",
    url: "https://github.com/yourusername/ML-Project-2",
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
