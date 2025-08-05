import React from 'react';
import './CoursesPage.css';

const courses = [
  {
    title: 'Morning Yoga Flow',
    description: 'Start your day with calm energy and flexibility.',
    image: require('../../images/yoga.png'),
    level: 'Beginner',
    duration: '30 mins',
  },
  {
    title: 'Strength & Burn',
    description: 'Build muscle and burn fat with this high-intensity course.',
    image: require('../../images/strength.png'),
    level: 'Intermediate',
    duration: '45 mins',
  },
  {
    title: 'Cardio Blast',
    description: 'Boost your heart health and stamina!',
    image: require('../../images/cardio.png'), // 🔁 fixed extension
    level: 'All Levels',
    duration: '25 mins',
  },
  {
    title: 'Mindset & Recovery',
    description: 'Recharge mentally and physically with guided recovery.',
    image: require('../../images/mindset.png'),
    level: 'All Levels',
    duration: '20 mins',
  },
];

const CoursesPage = () => {
  return (
    <div className="courses-container">
      <h1 className="courses-title">Explore Our Courses</h1>
      <p className="courses-subtitle">Choose a path to fuel your body and mind.</p>
      <div className="courses-grid">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-tags">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
