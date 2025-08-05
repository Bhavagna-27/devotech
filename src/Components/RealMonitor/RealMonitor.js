import React, { useState } from "react";
import "./RealMonitor.css";

// Exercise Types for the Dropdown
const exerciseTypes = [
  { name: "Cardio", icon: "🏃‍♂️", goal: 10 },
  { name: "Strength Training", icon: "🏋️‍♂️", goal: 8 },
  { name: "Flexibility", icon: "🧘‍♀️", goal: 12 },
  { name: "Cycling", icon: "🚴‍♀️", goal: 15 },
  { name: "Swimming", icon: "🏊‍♂️", goal: 5 },
  { name: "Weightlifting", icon: "🏋️", goal: 6 },
  { name: "Running", icon: "🏃‍♂️", goal: 20 },
];

const RealMonitor = () => {
  // UseState for exercise types
  const [exerciseCount, setExerciseCount] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [restDays, setRestDays] = useState(0);
  const [selectedExerciseType, setSelectedExerciseType] = useState("Cardio");
  const [progress, setProgress] = useState(0);

  // Additional exercise tracking states
  const [runningSessions, setRunningSessions] = useState(0);
  const [cyclingSessions, setCyclingSessions] = useState(0);
  const [swimmingSessions, setSwimmingSessions] = useState(0);
  const [weightliftingSessions, setWeightliftingSessions] = useState(0);
  const [yogaSessions, setYogaSessions] = useState(0);

  const handleExerciseAdd = () => {
    setExerciseCount(exerciseCount + 1);
    setProgress(((exerciseCount + 1) / exerciseTypes.find((e) => e.name === selectedExerciseType).goal) * 100);
  };

  const handleSleepAdd = () => {
    setSleepHours(sleepHours + 1);
  };

  const handleRestAdd = () => {
    setRestDays(restDays + 1);
  };

  return (
    <div className="real-monitor">
      <h2 className="dashboard-title">📊 RealMonitor Dashboard</h2>

      {/* Exercise Type Selector */}
      <div className="exercise-type-selector">
        <label htmlFor="exerciseType" className="exercise-type-label">Choose Exercise Type</label>
        <select
          id="exerciseType"
          className="exercise-type-dropdown"
          value={selectedExerciseType}
          onChange={(e) => setSelectedExerciseType(e.target.value)}
        >
          {exerciseTypes.map((exercise, index) => (
            <option key={index} value={exercise.name}>
              {exercise.icon} {exercise.name}
            </option>
          ))}
        </select>
      </div>

      {/* Progress Bar for Exercise Goal */}
      <div className="progress-bar-container">
        <div className="progress-bar-title">Progress: {Math.round(progress)}%</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Stats Container */}
      <div className="stats-container">
        <div className="card exercise">
          <h5>🏋️‍♂️ Exercise Count: {selectedExerciseType}</h5>
          <p className="stat-value">{exerciseCount}</p>
          <button onClick={handleExerciseAdd}>Add Workout</button>
        </div>

        <div className="card sleep">
          <h5>😴 Sleep Hours</h5>
          <p className="stat-value">{sleepHours}</p>
          <button onClick={handleSleepAdd}>Add Sleep Hour</button>
        </div>

        <div className="card rest">
          <h5>🛌 Rest Days</h5>
          <p className="stat-value">{restDays}</p>
          <button onClick={handleRestAdd}>Add Rest Day</button>
        </div>

        {/* Additional Exercise Tracking */}
        <div className="card running">
          <h5>🏃‍♂️ Running Sessions</h5>
          <p className="stat-value">{runningSessions}</p>
          <button onClick={() => setRunningSessions(runningSessions + 1)}>
            Add Running Session
          </button>
        </div>

        <div className="card cycling">
          <h5>🚴‍♀️ Cycling Sessions</h5>
          <p className="stat-value">{cyclingSessions}</p>
          <button onClick={() => setCyclingSessions(cyclingSessions + 1)}>
            Add Cycling Session
          </button>
        </div>

        <div className="card swimming">
          <h5>🏊‍♂️ Swimming Sessions</h5>
          <p className="stat-value">{swimmingSessions}</p>
          <button onClick={() => setSwimmingSessions(swimmingSessions + 1)}>
            Add Swimming Session
          </button>
        </div>

        <div className="card weightlifting">
          <h5>🏋️ Weightlifting Sessions</h5>
          <p className="stat-value">{weightliftingSessions}</p>
          <button onClick={() => setWeightliftingSessions(weightliftingSessions + 1)}>
            Add Weightlifting Session
          </button>
        </div>

        <div className="card yoga">
          <h5>🧘‍♀️ Yoga Sessions</h5>
          <p className="stat-value">{yogaSessions}</p>
          <button onClick={() => setYogaSessions(yogaSessions + 1)}>
            Add Yoga Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealMonitor;
