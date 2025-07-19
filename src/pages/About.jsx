import React from 'react';
import '../styles/about.css'; 

const About = () => {
  return (
    <div className="about-page">
      <h2>About SchemeSeeker</h2>
      <p>
        SchemeSeeker is a platform that helps Indian citizens discover government welfare schemes 
        they may be eligible for — quickly, simply, and in one place.
      </p>

      <h3>Why We Built SchemeSeeker</h3>
      <p>
        Many people miss out on valuable government schemes due to lack of awareness or access. 
        Our mission is to close that gap using smart technology and accessibility.
      </p>

      <h3>Who Can Use This?</h3>
      <ul>
        <li>Students</li>
        <li>Farmers</li>
        <li>Women & Senior Citizens</li>
        <li>Workers & Job Seekers</li>
        <li>Anyone who wants to access benefits they qualify for</li>
      </ul>

      <h3>How It Works</h3>
      <p>
        You simply enter your basic details — age, income, region, and occupation — and our 
        platform shows you possible schemes you may be eligible for.
      </p>
    </div>
  );
};

export default About;
