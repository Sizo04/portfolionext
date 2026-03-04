import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">
          Skills<span>.</span>
        </h2>
      </div>

      <div className="skills-grid">
        <div
          className="skill-card"
          style={{ "--level": "95%" } as React.CSSProperties}
        >
          <div className="skill-icon">🌐</div>
          <div className="skill-name">HTML + CSS</div>
          <div className="skill-desc">
            Semantic markup, accessibility, and modern HTML5 standards. Flexbox,
            Grid, animations, responsive design and CSS variables.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>

        <div
          className="skill-card"
          style={{ "--level": "85%" } as React.CSSProperties}
        >
          <div className="skill-icon">⚡</div>
          <div className="skill-name">JavaScript</div>
          <div className="skill-desc">
            ES6+, async/await, DOM manipulation, and modern JS patterns.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>

        <div
          className="skill-card"
          style={{ "--level": "80%" } as React.CSSProperties}
        >
          <div className="skill-icon">📘</div>
          <div className="skill-name">TypeScript</div>
          <div className="skill-desc">
            Strongly typed JavaScript with interfaces, generics, and type-safe
            component props in React and Next.js projects.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>

        <div
          className="skill-card"
          style={{ "--level": "90%" } as React.CSSProperties}
        >
          <div className="skill-icon">⚛</div>
          <div className="skill-name">React</div>
          <div className="skill-desc">
            Building interactive UIs with components, hooks, and state
            management.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>

        <div
          className="skill-card"
          style={{ "--level": "80%" } as React.CSSProperties}
        >
          <div className="skill-icon">▲</div>
          <div className="skill-name">Next.js</div>
          <div className="skill-desc">
            SSR, SSG, App Router, API routes and performance optimization.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>

        <div
          className="skill-card"
          style={{ "--level": "75%" } as React.CSSProperties}
        >
          <div className="skill-icon">🔥</div>
          <div className="skill-name">Firebase</div>
          <div className="skill-desc">
            Realtime database, authentication, and cloud storage for modern web
            applications.
          </div>
          <div className="skill-level">
            <div className="level-label">Proficiency</div>
            <div className="level-bar">
              <div className="level-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
