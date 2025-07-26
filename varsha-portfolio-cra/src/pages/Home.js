import React from 'react';
import varshaPhoto from '../assets/varshaphoto.jpeg';

const Home = () => (
  <section id="about" className="card">
    <h2>About Me</h2>
    <div className="about-flex">
      <div className="about-text">
        <p>
          Hi! I’m Varsha Shivanand K, a dedicated student currently pursuing dual degrees — B.Tech. (Hons.) in Computer Science and Engineering at RV University, and a BS in Data Science from IIT Madras. I’m passionate about technology, data, and building meaningful things through collaboration. I enjoy learning new skills, solving real-world problems, and creating tech that’s both smart and user-friendly. What makes me unique is my mix of curiosity, creativity, and the drive to make a difference through what I build.
        </p>
      </div>
      <div className="about-image">
        <img src={varshaPhoto} alt="Varsha Shivanand K" />
      </div>
    </div>

    <div className="side-by-side">
      <section id="skills" className="card">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
          <li>C++</li>
        </ul>
      </section>

      <section id="interests" className="card">
        <h2>Interests / Hobbies</h2>
        <ol>
          <li>Reading Books</li>
          <li>Singing</li>
          <li>Dancing</li>
        </ol>
      </section>
    </div>
  </section>
);

export default Home;
