import React from "react";
import Header from "./Header";
import List from "./List.js";
const About = () => {
  const lists = [
    "Build home screen - done",
    "Build About page - done",
    "Build Log in and Sing up pages - done",
    "Complete Slots page front end - done",
    "Make slot games more beautiful",
    "Make forms more beautiful - done",
    "Add mistery won screen",
    "Add win animations",
    "Add sound effects",
    "Visualise paytables",
  ];
  const feats = [
    "Multiple games",
    "Included Wilds and Scatters",
    "Free games and multiplier",
    "Mysteries",
    "Differrent paytables",
  ];

  return (
    <div className="aboutPage">
      <Header title="About the project" colors="white" />
      <h2>To do:</h2>
      {lists.map((list, index) => (
        <List list={list} key={index} />
      ))}
      <h2>Features:</h2>
      {feats.map((feat, index) => (
        <List list={feat} key={index} />
      ))}
      <p className="dev">developed by Marin Mihailov</p>
    </div>
  );
};
export default About;
