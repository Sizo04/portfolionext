import React from "react";
import { getPortfolioStats } from "../helper/commitCount";
import "../styles/about.css";

export const revalidate = 86400;

const { totalCommits, repoCount } = await getPortfolioStats("Sizo04");

export default function About() {
  const traits = [
    {
      label: "Fast Learner",
      desc: "I pick up new tools and concepts quickly and apply them right away.",
    },
    {
      label: "Adaptive",
      desc: "I adjust to new environments, tech stacks, and team workflows with ease.",
    },
    {
      label: "Team Player",
      desc: "I thrive in collaborative environments and enjoy building things together.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Who I <span>Am.</span>
          </h2>

          <p className="about-bio">
            I'm <strong>Aleksandar</strong>, a Frontend Developer with a passion
            for building clean, modern web experiences. I graduated from{" "}
            <span className="accent">Brainster Frontend Academy</span>, where I
            sharpened my skills in React, Next.js, JavaScript, and modern CSS.
          </p>

          <p className="about-bio">
            I'm always looking for opportunities to grow — whether that's diving
            into a new framework, collaborating with a team, or solving a tricky
            UI problem. I believe great frontend work is where design meets
            logic.
          </p>

          <div className="about-traits">
            {traits.map((trait, i) => (
              <div className="trait" key={i}>
                <div className="trait-header">
                  <span className="trait-dot" />
                  <span className="trait-label">{trait.label}</span>
                </div>
                <p className="trait-desc">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-num">6+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{totalCommits.toLocaleString()}</span>
            <span className="stat-label">Number Of Commits</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{repoCount}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">100%</span>
            <span className="stat-label">Committed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
