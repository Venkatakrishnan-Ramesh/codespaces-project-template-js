import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Venkatakrishnan R",
  title: "Software Engineer & AI Enthusiast",
  email: "venkat@example.com", // replace with your email
  gitHub: "your-github-username", // replace with your GitHub username
  instagram: "your-instagram-handle", // replace with your Instagram handle
  linkedIn: "your-linkedin-username", // replace with your LinkedIn username
  medium: "your-medium-handle", // replace with your Medium handle
  twitter: "your-twitter-handle", // replace with your Twitter handle
  youTube: "your-youtube-channel", // replace with your YouTube channel name
};

const primaryColor = "#D2F1E4"; // replace with your preferred primary color
const secondaryColor = "#D2F1E4"; // replace with your preferred secondary color

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
