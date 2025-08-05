import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./Home.css";
import logo from "../images/logo.png";
import secondImage from "../images/background2.jpg";
import pic from "../images/pic.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

import Signup from "./Signup/Signup";

const Home = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleNavClick = (link) => setActiveLink(link);
  const toggleSignup = () => setShowSignup(!showSignup);

  const navItems = [
    {
      name: "Advice",
      dropdown: ["Fitness", "Fuel Facts"]
    },
    
    {
      name: "Health",
      link: "/health"
    },
    { name: "Wearables", link: "/wearables" },
    { name: "Help" },
    { name: "Login", link: "/Login" }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 sticky-top">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Devotech Logo" className="devotech-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {navItems.map(({ name, dropdown, link }) =>
              dropdown ? (
                <li className="nav-item dropdown" key={name}>
                  <a
                    className={`nav-link dropdown-toggle ${activeLink === name ? "active-link" : ""}`}
                    href="#"
                    id={`${name.toLowerCase()}Dropdown`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => handleNavClick(name)}
                  >
                    {name}
                  </a>
                  <div className="dropdown-menu" aria-labelledby={`${name.toLowerCase()}Dropdown`}>
                    {dropdown.map((item, i) => {
                      let route = "#";
                      if (item === "Fuel Facts") route = "/fuel-facts";
                      else if (item === "Fitness") route = "/fitness";
                      else if (item === "Exercise Count") route = "/realmonitor/exercise";
                      else if (item === "Sleep Hours") route = "/realmonitor/sleep";
                      else if (item === "Rest Days") route = "/realmonitor/rest";

                      return route === "#" ? (
                        <a key={i} className="dropdown-item" href="#">
                          {item}
                        </a>
                      ) : (
                        <Link key={i} className="dropdown-item" to={route}>
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </li>
              ) : (
                <li className="nav-item" key={name}>
                  {link ? (
                    <Link
                      className={`nav-link ${activeLink === name ? "active-link" : ""}`}
                      to={link}
                      onClick={() => handleNavClick(name)}
                    >
                      {name}
                    </Link>
                  ) : (
                    <a
                      className={`nav-link ${activeLink === name ? "active-link" : ""}`}
                      href="#"
                      onClick={() => handleNavClick(name)}
                    >
                      {name}
                    </a>
                  )}
                </li>
              )
            )}
            <li className="nav-item ms-2">
              <button className="btn btn-signup" onClick={toggleSignup}>
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <div className="hero-content text-center animate__animated animate__fadeInUp animate__delay-1s">
            <h1 className="hero-title display-4 fw-bold text-purple animate__animated animate__fadeInDown animate__faster">
              SAY HELLO TO <br /> THE <span className="highlight-text">#1 DEVOTECH PLATFORM</span>
            </h1>
            <p className="hero-description text-purple fs-5 mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              Unlimited access to the world’s best workouts, meditation, nutrition and more.
            </p>
            <button
              className="btn btn-signup-pink mt-4 animate__animated animate__zoomIn animate__delay-2s"
              onClick={toggleSignup}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Transition Text Section */}
      <div className="transition-banner text-center text-white py-5 animate__animated animate__fadeIn">
        <h2 className="display-6 fw-bold">
          <span className="text-purple">Devotech:</span> <span className="text-highlight">Empowering Innovation</span>
          <span className="text-purple">, Delivering Excellence.</span>
        </h2>
      </div>

      {/* Second Image Section */}
      <div className="secondary-image-section position-relative">
        <img src={secondImage} alt="Second Devotech Feature" className="secondary-image" />
        <div className="overlay">
          <div className="text-center animate__animated animate__fadeInUp animate__delay-1s">
            <h2 className="display-4 fw-bold text-white animate__animated animate__fadeInDown animate__faster">
              UNLIMITED VARIETY
            </h2>
            <p className="fs-5 mt-3 text-white animate__animated animate__fadeInUp animate__delay-1s">
              Get access to world’s best workouts from cardio, yoga, strength, pilates, toning and more.
              <br />
              No equipment needed.
            </p>
            <button
              className="btn btn-signup-pink mt-4 animate__animated animate__zoomIn animate__delay-2s"
              onClick={toggleSignup}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="separator-section text-center">
        <h3 className="mt-4 fw-bold">
          <span className="text-highlight">Take your </span>
          <span className="text-purple">wellness</span>
          <span className="text-highlight"> to the next level</span>
        </h3>
        <img src={require("../images/sep.png")} alt="Separator" className="img-fluid separator-image" />
      </div>

      {/* Featured In Section */}
      <div className="featured-wrapper">
        <div className="featured-card">
          <h2 className="featured-title">Featured in</h2>
          <div className="featured-logos">
            <span className="brand womenshealth">Women’sHealth</span>
            <span className="brand people">People</span>
            <span className="brand britco">
              <span className="brit">BRIT</span><span className="plus">+</span><span className="co">CO</span>
            </span>
            <span className="brand cafemom">cafemom</span>
            <span className="brand sheknows"><span className="she">she</span><span className="knows">knows</span></span>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="signup-overlay">
          <Signup />
        </div>
      )}

      {/* Second Hero */}
      <div className="hero-section">
        <div className="overlay">
          <div className="hero-content text-center animate__animated animate__fadeInUp animate__delay-1s">
            <h1 className="hero-title display-4 fw-bold text-white animate__animated animate__fadeInDown animate__faster">
              Track Your Wellness
            </h1>
            <p className="hero-description text-white fs-5 mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              Monitor your exercise, sleep, and rest days in one place.
            </p>
            <Link to="/realmonitor">
              <button className="btn btn-signup-pink mt-4 animate__animated animate__zoomIn animate__delay-2s">
                RealMonitor Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="why-us-section text-center py-5 animate__animated animate__fadeInUp">
        <h2 className="display-5 fw-bold mb-4">What Makes Us Different?</h2>
        <div className="container">
          <div className="row justify-content-center">
            {[
              { img: pic, title: "Expert-Led Programs", desc: "Curated by top coaches, athletes & wellness experts with years of experience." },
              { img: pic1, title: "Science-Backed", desc: "We integrate proven research into every area: sleep, stress, and nutrition." },
              { img: pic2, title: "Supportive Community", desc: "You're never alone—connect with others who share your journey and goals." },
              { img: pic3, title: "Daily Motivation", desc: "Stay consistent with daily inspiration, habit tracking, and reward systems." }
            ].map((card, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="img-fluid rounded-circle mb-3"
                  style={{ height: "100px", width: "100px", objectFit: "cover" }}
                />
                <h5 className="fw-semibold">{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
