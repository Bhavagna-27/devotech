// src/pages/Wearables/Wearables.jsx
import React from "react";
import "./Wearables.css";  // Importing CSS
import smartwatch from "../../images/smartwatch.jpg";
import tracker from "../../images/cardio.png"; // replace with correct image
import sleep from "../../images/recovery.png"; // or similar
import heart from "../../images/strength.png"; // or similar

const wearablesData = [
  {
    name: "Smartwatch",
    image: smartwatch,
    description: "Stay connected and track your fitness goals with this stylish smartwatch.",
    link: "#",
  },
  {
    name: "Fitness Tracker",
    image: tracker,
    description: "Track your steps, heart rate, and more with this amazing fitness tracker.",
    link: "#",
  },
  {
    name: "Sleep Monitor",
    image: sleep,
    description: "Improve your sleep quality with this advanced sleep monitoring wearable.",
    link: "#",
  },
  {
    name: "Heart Rate Monitor",
    image: heart,
    description: "Monitor your heart rate during workouts with this lightweight device.",
    link: "#",
  },
];

const Wearables = () => {
  return (
    <div className="wearables-container">
      <h1 className="page-title">Discover Our Wearable Devices</h1>
      <div className="wearables-grid">
        {wearablesData.map((wearable, index) => (
          <div className="wearable-card" key={index}>
            <img src={wearable.image} alt={wearable.name} className="wearable-image" />
            <h3 className="wearable-name">{wearable.name}</h3>
            <p className="wearable-description">{wearable.description}</p>
            <a href={wearable.link} className="learn-more-btn">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wearables;
