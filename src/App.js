import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Page components
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import FitnessPage from "./Components/Pages/FitnessPage";
import FuelFacts from "./Components/Pages/FuelFacts";
import RealMonitor from "./Components/RealMonitor/RealMonitor";
import Wearables from "./Components/Wearables/Wearables";
import Health from "./Components/Health/Health";
import HelpPage from "./Components/HelpPage/HelpPage";
import CoursesPage from "./Components/Pages/CoursesPage";

const App = () => {
  const menuStyle = {
    display: "inline-block",
    padding: "12px 20px",
    color: "#9333ea",
    textDecoration: "none",
    fontWeight: 500,
    transition: "0.3s",
    border: "1px solid #9333ea",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(147, 51, 234, 0.1)",
    marginRight: "10px",
  };

  return (
    <div
      className="app-container"
      style={{
        padding: "50px",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(to right, #f3e8ff, #ffe4f6)",
        minHeight: "100vh",
      }}
    >
      {/* Navigation for testing */}
      <nav style={{ marginBottom: "30px" }}>
        <Link to="/" style={menuStyle}>Home</Link>
        <Link to="/fitness" style={menuStyle}>Fitness</Link>
        <Link to="/fuel-facts" style={menuStyle}>Fuel Facts</Link>
        <Link to="/realmonitor" style={menuStyle}>Real Monitor</Link>
        <Link to="/wearables" style={menuStyle}>Wearables</Link>
        <Link to="/health" style={menuStyle}>Health</Link>
        <Link to="/help" style={menuStyle}>Help</Link>
        <Link to="/courses" style={menuStyle}>Courses</Link>
        <Link to="/login" style={menuStyle}>Login</Link>
        <Link to="/signup" style={menuStyle}>Signup</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/fuel-facts" element={<FuelFacts />} />
        <Route path="/realmonitor" element={<RealMonitor />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/health" element={<Health />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        {/* Optional fallback for unmatched routes */}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
