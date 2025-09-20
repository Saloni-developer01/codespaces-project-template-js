/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/design-desk.jpg";


const imageAltText = "desktop with books and computer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Maze Game 🎉",
    description:
      "It's a puzzle-solving challenge that requires you to overcome various twists and turns to reach the exit.",
    url: "https://saloni-developer01.github.io/Maze-Game/",
  },
  {
    title: "Image Searching App",
    description:
      "This is the image searching web in which you can see the images of your choice. 'API WEB'",
    url: "https://saloni-developer01.github.io/Image-generator/",
  },
  {
    title: "Code Editor",
    description:
      "This is very simple and Beautiful Code Editor in which you design a different types of website!.",
    url: "https://saloni-developer01.github.io/CodeEditor/",
  },
  {
    title: "Linkedin Clone",
    description:
      "'A MERN Project', LinkedIn is a professional networking platform, which I have cloned here.",
    url: "https://linkedin-clone-seven-dusky.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
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
