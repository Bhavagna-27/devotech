import React from "react";
import "./FitnessPage.css";

import cardio from "../../images/cardio.png";
import strength from "../../images/strength.png";
import yoga from "../../images/yoga.png";
import nutrition from "../../images/nutrition.png";
import recovery from "../../images/recovery.png";
import mindset from "../../images/mindset.png";


const FitnessPage = () => {
  return (
    <div className="fitness-page">
      <header className="fitness-header">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Fitness is not just a goal, it's a lifestyle. Get started today!</p>
      </header>

      <section className="fitness-advice">
        <div className="advice-card">
          <img src={strength} alt="Strength Training" className="advice-image" />
          <h2>Strength Training</h2>
          <p>
            Strength training helps you build muscle, burn fat, and boost metabolism.
            Start lifting today for a stronger tomorrow!
          </p>
        </div>

        <div className="advice-card">
          <img src={cardio} alt="Cardio for Heart Health" className="advice-image" />
          <h2>Cardio for Heart Health</h2>
          <p>
            A healthy heart is key to a long and happy life. Mix up your cardio routine to keep things exciting!
          </p>
        </div>

        <div className="advice-card">
          <img src={nutrition} alt="Nutrition" className="advice-image" />
          <h2>Fuel Your Body Right</h2>
          <p>
            What you eat affects how you perform. Nourish your body with the right nutrients and see the difference!
          </p>
        </div>

        <div className="advice-card">
          <img src={yoga} alt="Flexibility & Mobility" className="advice-image" />
          <h2>Flexibility & Mobility</h2>
          <p>
            Incorporate stretching and yoga into your routine to stay flexible and injury-free.
          </p>
        </div>

        <div className="advice-card">
          <img src={recovery} alt="Rest & Recovery" className="advice-image" />
          <h2>Rest & Recovery</h2>
          <p>
            Recovery is just as important as the workout itself. Don’t underestimate the power of rest!
          </p>
        </div>

        <div className="advice-card">
          <img src={mindset} alt="Mindset" className="advice-image" />
          <h2>Positive Mindset</h2>
          <p>
            Fitness isn't just physical, it's mental. A strong mindset is key to achieving your goals.
          </p>
        </div>
      </section>

      <section className="fitness-gallery">
        <h2>Fitness in Action</h2>
        <div className="gallery-images">
          <img src={cardio} alt="Cardio Action" className="gallery-image" />
          <img src={strength} alt="Strength Action" className="gallery-image" />
          <img src={yoga} alt="Yoga Action" className="gallery-image" />
          <img src={recovery} alt="Recovery Action" className="gallery-image" />
        </div>
      </section>
    </div>
  );
};

export default FitnessPage;
