import React, { useState, useEffect } from "react";  // Add useEffect here
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import loginBacgroundImage from "../../images/background3.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // Track error messages
  const navigate = useNavigate();  // React Router's useNavigate hook for redirecting

  useEffect(() => {
    let current = null;

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const submitInput = document.querySelector("#submit");

    const handleFocus = (offset, dashArray) => {
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: dashArray,
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    };

    emailInput?.addEventListener("focus", () => handleFocus(0, "240 1386"));
    passwordInput?.addEventListener("focus", () => handleFocus(-336, "240 1386"));
    submitInput?.addEventListener("focus", () => handleFocus(-730, "530 1386"));

    return () => {
      emailInput?.removeEventListener("focus", () => handleFocus(0, "240 1386"));
      passwordInput?.removeEventListener("focus", () => handleFocus(-336, "240 1386"));
      submitInput?.removeEventListener("focus", () => handleFocus(-730, "530 1386"));
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission

    // Validate email and password
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Example of how to simulate checking the login credentials (You would replace this with an actual check)
    if (email === "user@example.com" && password === "password123") {
      // Redirect to Home page on successful login
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${loginBacgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            <b>Train smart. Stay motivated. Achieve more with Devotech.</b>
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style={{ stopColor: "#ff00ff" }} offset="0" id="stop876" />
                <stop style={{ stopColor: "#ff0000" }} offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path
              d="m 40,120 240,0 0,40 -240,0 z"
              stroke="url(#linearGradient)"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            {error && <div className="error-message">{error}</div>}  {/* Display error if any */}
            <input
              type="submit"
              id="submit"
              value="Submit"
              onClick={handleSubmit} // Trigger handleSubmit on click
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
