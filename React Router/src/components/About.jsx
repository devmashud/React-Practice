import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About The Fact Forge</h1>
        <p>
          At <strong>The Fact Forge</strong>, we believe in truth, transparency,
          and fearless journalism. Our mission is to deliver accurate,
          unbiased, and fact-checked news to empower our readers with knowledge
          that matters.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>🧠 Our Mission</h2>
          <p>
            To forge facts from fiction — in an era of misinformation, we stand
            as a trusted source where integrity leads every headline.
          </p>
        </div>

        <div className="about-card">
          <h2>📜 Our Values</h2>
          <ul>
            <li>✅ Accuracy above speed</li>
            <li>🕊️ Freedom of expression</li>
            <li>🔍 Accountability in reporting</li>
            <li>🤝 Respect for diverse perspectives</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>👩‍💻 Our Team</h2>
          <p>
            A dedicated group of journalists, editors, and tech enthusiasts from
            around the world — committed to building a better-informed society.
          </p>
        </div>
      </section>

      <section className="about-footer">
        <p>
          📧 Contact us: <a href="mailto:info@thefactforge.com">info@thefactforge.com</a>
        </p>
        <p>© {new Date().getFullYear()} The Fact Forge. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default About;
