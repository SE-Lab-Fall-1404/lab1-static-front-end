import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Website</h1>
          <p className="hero-subtitle">
            A modern static frontend application with automatic deployment
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              Learn More
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Fast Performance</h3>
              <p className="feature-description">
                Optimized for speed and efficiency with modern web technologies.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Easy Setup</h3>
              <p className="feature-description">
                Simple configuration and deployment process for quick start.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">CI/CD Ready</h3>
              <p className="feature-description">
                Automated deployment with GitHub Actions for seamless workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-content">
            <h2 className="section-title">About This Project</h2>
            <p className="about-text">
              This is a static frontend application built with React as part of
              a Software Engineering Lab experience. The project demonstrates
              modern web development practices including Git workflow, branching
              strategies, and continuous deployment.
            </p>
            <a href="/about" className="btn btn-outline">
              Read More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

