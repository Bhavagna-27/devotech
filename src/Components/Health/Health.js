import React from "react";
import "./Health.css";
import sleepImg from "../../images/recovery.png";
import hydrationImg from "../../images/sodium.jpg";
import mentalImg from "../../images/mindset.png";
import injuryImg from "../../images/yoga.png";
import heartImg from "../../images/cardio.png";
import cycleImg from "../../images/fat.jpg";

const healthData = [
  {
    title: "Sleep & Recovery",
    image: sleepImg,
    description: "Quality sleep is essential for physical recovery and mental clarity. Lack of sleep can impair decision-making, reduce endurance, and delay muscle recovery.",
    exercise: "Gentle yoga, stretching, and guided meditation can improve sleep quality.",
    tips: "Avoid screens before bed, maintain a consistent sleep schedule, and limit caffeine intake."
  },
  {
    title: "Hydration & Wellness",
    image: hydrationImg,
    description: "Staying hydrated helps regulate body temperature, supports nutrient transport, and keeps joints lubricated.",
    exercise: "Light aerobic exercises like walking or swimming help maintain hydration balance.",
    tips: "Drink water regularly, especially after workouts. Eat water-rich foods like cucumbers and oranges."
  },
  {
    title: "Mental Health Check-Ins",
    image: mentalImg,
    description: "Mental well-being is the foundation of total wellness. Stress, anxiety, and burnout affect physical performance.",
    exercise: "Breathing exercises, journaling, and mindfulness meditation improve focus and reduce stress.",
    tips: "Practice gratitude daily, set healthy boundaries, and connect with loved ones often."
  },
  {
    title: "Injury Prevention",
    image: injuryImg,
    description: "Preventing injury means better consistency and long-term results. Tight muscles and poor form can lead to setbacks.",
    exercise: "Include dynamic warm-ups, core strengthening, and flexibility training in your routine.",
    tips: "Rest when needed, listen to your body, and don't skip warm-ups or cool-downs."
  },
  {
    title: "Heart Rate Zones",
    image: heartImg,
    description: "Training within your ideal heart rate zone boosts cardiovascular health and maximizes fat burn.",
    exercise: "Monitor your heart rate with wearables during HIIT, steady cardio, or endurance workouts.",
    tips: "Use smartwatches or fitness bands to track HR and adjust intensity accordingly."
  },
  {
    title: "Cycle & Hormone Tracking",
    image: cycleImg,
    description: "Understanding your hormonal cycle helps women plan workouts and manage energy better.",
    exercise: "Opt for lighter workouts during menstruation and ramp up intensity during follicular phase.",
    tips: "Track your cycle with apps, adjust routines accordingly, and prioritize recovery during low-energy days."
  }
];

const Health = () => {
  return (
    <div className="health-page">
      <h1 className="health-title">Your Guide to Better Health</h1>
      <p className="health-subtitle">Explore common health challenges and how to conquer them with fitness, mindfulness, and good habits.</p>
      <div className="health-grid">
        {healthData.map((item, i) => (
          <div className="health-card" key={i}>
            <img src={item.image} alt={item.title} className="health-img" />
            <h3>{item.title}</h3>
            <p className="health-desc">{item.description}</p>
            <h5>Recommended Exercise:</h5>
            <p>{item.exercise}</p>
            <h5>Tips:</h5>
            <p>{item.tips}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health;
