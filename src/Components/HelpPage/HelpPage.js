import React from "react";
import anime from "animejs";
import "./HelpPage.css"; // Ensure you create this CSS file

const HelpPage = () => {
  React.useEffect(() => {
    // Animation for the page entrance
    anime({
      targets: '.page-title',
      translateY: [100, 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 1000
    });

    anime({
      targets: '.section-title',
      translateX: [100, 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 1200,
      delay: 500
    });

    anime({
      targets: '.help-item',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 1500,
      delay: 1000,
      loop: true,
      direction: "alternate",
      delay: (el, i) => i * 300 // staggered delay
    });
  }, []);

  return (
    <div className="help-page">
      <div className="hero-section">
        <h1 className="page-title">Devotech Help Center</h1>
        <p className="subheading">Your guide to fitness, health, and wellness</p>
      </div>

      <div className="content">
        <div className="help-section">
          <h2 className="section-title">Fitness Tips</h2>
          <div className="help-items">
            <div className="help-item">
              <h3>1. Stay Consistent</h3>
              <p>Consistency is key to achieving your fitness goals. Make sure to stick to a routine!</p>
            </div>
            <div className="help-item">
              <h3>2. Nutrition Matters</h3>
              <p>Your diet plays a major role in your fitness journey. Eat healthy, balanced meals.</p>
            </div>
            <div className="help-item">
              <h3>3. Rest & Recovery</h3>
              <p>Take enough rest between workouts. Your muscles grow during recovery.</p>
            </div>
          </div>
        </div>

        <div className="help-section">
          <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
          <div className="help-items">
            <div className="help-item">
              <h3>How often should I work out?</h3>
              <p>It's recommended to work out at least 3-5 times per week, depending on your goals.</p>
            </div>
            <div className="help-item">
              <h3>What is the best diet for muscle gain?</h3>
              <p>Focus on high-protein foods and ensure you have a calorie surplus for muscle growth.</p>
            </div>
            <div className="help-item">
              <h3>Can I lose fat and gain muscle at the same time?</h3>
              <p>Yes, but it requires a balanced workout plan and a controlled diet. Patience is key!</p>
            </div>
          </div>
        </div>

        <div className="help-section">
          <h2 className="section-title">Contact Us</h2>
          <p>If you need further assistance, feel free to reach out to us:</p>
          <div className="contact-info">
            <p>Email: support@devotech.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
