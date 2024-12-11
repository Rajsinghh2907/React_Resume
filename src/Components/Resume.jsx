// src/components/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>RAJ KUMAR SINGH</h1>
        <p>
          +91 7903170268 | rajkumarshivam2054@gmail.com | 
          <a href="https://leetcode.com/rajsinghh29" target="_blank" rel="noopener noreferrer">LeetCode</a> |
          <a href="https://github.com/Rajsinghh2907" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </header>

      <section className="resume-section">
        <h2>Career Objective</h2>
        <p>
          Driven Full Stack Web Developer with expertise in MERN stack technologies, crafting dynamic and efficient web 
          solutions. Proficient in optimizing performance through robust problem-solving and algorithmic skills.
        </p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li><strong>Parul Institute of Technology, Vadodara</strong> - B.Tech. in Computer Science and Engineering (CGPA: 7.10) <br />
          September 2021 - May 2025</li>
          <li><strong>Jn College, Madhubani</strong> - High School Certification (Percentage: 74) <br />
          April 2020 - May 2021</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>WANDERLUST</strong> <em>(November 2023 – March 2024)</em> <br />
            Technologies: HTML, CSS, JavaScript, Bootstrap, Express JS, Node JS, MongoDB <br />
            <p>This Full Stack application creates a global hotel directory, helping users easily find accommodations across cities for their vacations. Includes seamless login options and the ability for users to add their properties.</p>
            <a href="https://wanderlust-gprt.onrender.com/listings" target="_blank" rel="noopener noreferrer">Deployed Link</a>
          </li>
          <li>
            <strong>Grocery Express</strong> <em>(July 2023 – October 2023)</em> <br />
            Technologies: React, Express, Node, MongoDB <br />
            <p>A grocery e-commerce platform with a robust product catalog management system, optimized shopping cart, and seamless checkout process.</p>
          </li>
          <li>
            <strong>SnapNest (Minor Project)</strong> <em>(June 2023 – July 2023)</em> <br />
            Technologies: HTML, Tailwind CSS <br />
            <p>A user-friendly platform for uploading, managing, and sharing photographs and artwork.</p>
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <p><strong>Coding Languages:</strong> JAVA, Python, JavaScript, MySQL, NoSQL (MongoDB), HTML/CSS</p>
        <p><strong>Frameworks:</strong> React, Node.js, Express.js, Tailwind CSS, Bootstrap</p>
        <p><strong>Developer Tools:</strong> Git, Android Studio, Visual Studio Code, Eclipse</p>
        <p><strong>Soft Skills:</strong> Problem-Solving, Creativity, Teamwork, Adaptability, Good listener</p>
        <p><strong>Languages:</strong> Hindi, English</p>
      </section>

      <section className="resume-section">
        <h2>Achievements</h2>
        <ul>
          <li>Achieved Elite Certification in Data Visualization and Data Analytics through NPTEL.</li>
          <li>Solved over 500 LeetCode problems covering Data Structures and Algorithms.</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
