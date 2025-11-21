import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Learn more about our team, mission, and the work we do
          </p>
        </div>
      </header>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text-content">
              <h2>Our Mission</h2>
              <p>
                We are a team of passionate software engineering students and professionals 
                dedicated to building innovative web applications that solve real-world problems. 
                Our mission is to create user-friendly, efficient, and scalable solutions 
                while following best practices in software development.
              </p>
              <p>
                This static frontend project is part of our Software Engineering Lab experience, 
                designed to demonstrate modern web development workflows, version control 
                practices, and continuous deployment strategies.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Team Image</span>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>
                  We embrace new technologies and creative approaches to 
                  solve complex challenges in software development.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>
                  We believe in the power of teamwork and open communication 
                  to deliver exceptional results.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>
                  We are committed to writing clean, maintainable code and 
                  following industry best practices.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">📚</div>
                <h3>Learning</h3>
                <p>
                  We continuously learn and adapt to stay at the forefront 
                  of software engineering trends.
                </p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💻</div>
                <h3>John Doe</h3>
                <p className="member-role">Frontend Developer</p>
                <p className="member-bio">
                  Specializes in React, TypeScript, and modern CSS. 
                  Passionate about creating intuitive user interfaces.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💻</div>
                <h3>Jane Smith</h3>
                <p className="member-role">Backend Developer</p>
                <p className="member-bio">
                  Expert in Node.js, databases, and API design. 
                  Focuses on building scalable server architecture.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍🎨</div>
                <h3>Mike Johnson</h3>
                <p className="member-role">UI/UX Designer</p>
                <p className="member-bio">
                  Creates beautiful and functional designs that 
                  enhance user experience and engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to work with us?</h2>
            <p>
              Whether you have a project in mind or want to learn more about 
              our work, we'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="/" className="btn btn-outline">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;