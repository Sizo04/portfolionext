import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects-section-container" id="projects">
      <section className="projects-section">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Projects<span>.</span>
          </h2>
        </div>

        <div className="projects-list">
          <a
            href="https://github.com/Sizo04/pc-building"
            className="project-card"
            target="blank"
          >
            <span className="project-num">01</span>
            <div className="project-content">
              <h3 className="project-name">PC Builder</h3>
              <p className="project-desc">
                A web application that lets users browse and select computer
                components to build a custom PC.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Typescript</span>
                <span className="tag">Zustand</span>
              </div>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a
            href="https://github.com/Sizo04/artistmarketplace"
            className="project-card"
            target="blank"
          >
            <span className="project-num">02</span>
            <div className="project-content">
              <h3 className="project-name">Artists Marketplace</h3>
              <p className="project-desc">
                A project that simulates an artist marketplace where creators
                can showcase and sell their artwork.
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Javascript</span>
                <span className="tag">Chart.js</span>
                <span className="tag">Bidding API</span>
              </div>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a href="#" className="project-card">
            <span className="project-num">03</span>
            <div className="project-content">
              <h3 className="project-name">Portfolio Site</h3>
              <p className="project-desc">
                Personal portfolio built with Next.js and TypeScript. Features
                custom animations and a responsive layout.
              </p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Figma</span>
              </div>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a
            href="https://github.com/Sizo04/group-project-1"
            className="project-card"
            target="blank"
          >
            <span className="project-num">04</span>
            <div className="project-content">
              <h3 className="project-name">Team Collaboration Project</h3>
              <p className="project-desc">
                Developed a responsive page as part of a team project. Worked
                with Git branching, pull requests, and resolved merge conflicts
                while collaborating through GitHub.
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Git</span>
                <span className="tag">Github</span>
                <span className="tag">Figma</span>
              </div>
            </div>
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
