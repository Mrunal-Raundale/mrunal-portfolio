import React, { useState } from 'react';
import '../styles/Projects.css';
import projects from '../data/projects';

const CATS = ['All', 'Backend', 'Frontend'];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div
        className="project-thumb"
        style={{ background: project.color }}
      >
        <span className="project-thumb-emoji">{project.emoji}</span>
        <span className="project-thumb-label">{project.label}</span>
      </div>

      <div className="project-body">
        <div className="project-cat">{project.cat}</div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>

        <div className="project-features">
          {project.features.map((f) => (
            <div className="feature-item" key={f}>
              <i className="ti ti-check"></i>
              {f}
            </div>
          ))}
        </div>

        <div className="project-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            className="link-btn"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <i className="ti ti-brand-github" style={{ fontSize: '13px' }}></i> */}
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="section-label">My work</div>
      <div className="section-title">Projects</div>
      <div className="section-desc">
        Real applications I've built covering backend APIs, frontend clones,
        and full-stack products.
      </div>
      <div className="divider"></div>

      <div className="project-filter">
        {CATS.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
