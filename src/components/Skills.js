import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';
import skillsData from '../data/skills';

function SkillGroup({ group, animate }) {
  return (
    <div className="skill-group">
      <div className="skill-group-title">
        <i className={`ti ${group.icon}`}></i>
        {group.group}
      </div>
      {group.items.map((item) => (
        <div className="skill-item" key={item.name}>
          <div className="skill-name-wrap">
            <span className="skill-dot" style={{ background: item.color }}></span>
            <span className="skill-name">{item.name}</span>
          </div>
          <div className="skill-bar-wrap">
            <div
              className="skill-bar"
              style={{
                width: animate ? `${item.width}%` : '0%',
                background: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section section-wrapper ${animate ? 'skills-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-label">What I work with</div>
      <div className="section-title">Skills &amp; tools</div>
      <div className="section-desc">
        My go-to technologies for building full-stack web applications.
      </div>
      <div className="divider"></div>

      <div className="skills-grid">
        {skillsData.map((group) => (
          <SkillGroup key={group.id} group={group} animate={animate} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
