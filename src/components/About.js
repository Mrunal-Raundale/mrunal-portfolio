import React from 'react';
import '../styles/About.css';

const stats = [
  { num: '3',    label: 'Key projects built'      },
  { num: '5',    label: 'Core technologies'        },
  { num: 'Full', label: 'Stack coverage'           },
  { num: '∞',    label: 'APIs tested in Postman'   },
];

function About() {
  return (
    <section id="about" className="about-section section-wrapper">
      <div className="section-label">Who I am</div>
      <div className="section-title">About me</div>
      <div className="divider"></div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Hi! I'm <strong>Mrunal Raundale</strong>, a full-stack developer
            specialising in the <strong>MERN stack</strong> — MongoDB, Express.js,
            React, and Node.js. I enjoy building scalable, well-structured
            applications from the ground up, both on the server and in the browser.
          </p>
          <p>
            On the backend I focus on clean REST API design, secure authentication
            with JWT, and robust database modelling with Mongoose. On the frontend I
            build responsive, interactive UIs using React and vanilla JS — from
            smooth scroll animations to pixel-precise UI clones.
          </p>
          <p>
            I use <strong>Postman</strong> throughout development to design, test,
            and document every API endpoint before wiring it to the frontend —
            ensuring reliability at every layer.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
