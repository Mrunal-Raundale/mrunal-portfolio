import React from 'react';
import '../styles/Hero.css';

const badges = [
  { label: '🍃 MongoDB',  color: '#00ed64', border: 'rgba(0,237,100,0.25)' },
  { label: '⚡ Express',  color: '#ccc',    border: 'rgba(200,200,200,0.2)' },
  { label: '⚛️ React',    color: '#61dafb', border: 'rgba(97,218,251,0.25)' },
  { label: '🟢 Node.js',  color: '#68a063', border: 'rgba(104,160,99,0.3)'  },
  { label: '📮 Postman',  color: '#ff6c37', border: 'rgba(255,108,55,0.3)'  },
];

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="pulse"></span>
          MERN Stack Developer
        </div>

        <h1>
          Hi, I'm <span>Mrunal</span>
          <br />
          Raundale
        </h1>

        <p className="hero-sub">
          I build full-stack web applications using MongoDB, Express.js, React,
          and Node.js from secure REST APIs to pixel-perfect frontends, tested
          end-to-end with Postman.
        </p>

        <div className="stack-badges">
          {badges.map((b) => (
            <span
              key={b.label}
              className="stack-badge"
              style={{ color: b.color, borderColor: b.border }}
            >
              {b.label}
            </span>
          ))}
        </div>

        <div className="hero-ctas">
          <a className="btn-primary" href="#projects">View my work</a>
          <a className="btn-outline" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero-avatar">MR</div>
    </div>
  );
}

export default Hero;
