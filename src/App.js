/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from 'react';
import { ChevronUp, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 300);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'technologies', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <a href="javascript:void(0)" onClick={() => scrollToSection('hero')}>Rue.</a>
          </div>
          
          {/* Desktop Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('technologies')}
                className={`nav-link ${activeSection === 'technologies' ? 'active' : ''}`}
              >
                Technologies
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-text-content">
            <p className="greeting">Hi, I'm</p>
            <h1 className="hero-name">Runyararo Marongwe</h1>
            <p className="role">Front-End Developer</p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Let's Connect
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-wrapper">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Runyararo Marongwe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Me"
            />
          </div>
          <div className="about-info">
            <h2>About Me</h2>
            <div className="about-text">
              <p>
                Hi, I'm Runyararo Marongwe, a front-end developer with a passion for
                creating beautiful and functional web applications. I love turning
                ideas into interactive web experiences. I specialize in HTML, CSS, JavaScript, JSX and React to build responsive, user-friendly interfaces.
              </p>
              <p>
                I thrive on building elegant, user-friendly web interfaces with clean,
                efficient code. I'm currently open to exciting front-end opportunities
                where I can contribute to meaningful projects and grow alongside a
                passionate team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="technologies-section">
        <div className="technologies-container">
          <h2>Technologies</h2>
          <ul className="tech-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>DOM Manipulation</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kanban Task Board" />
              </div>
              <div className="project-content">
                <h3>Kanban Task Board</h3>
                <p>
                  A dynamic task manager using localStorage and modals to add, edit,
                  and delete tasks.
                </p>
                <div className="tech-tags">
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>LocalStorage</span>
                </div>
                <a
                  href="https://github.com/Rue87/RUNMAR25118_fto2502_B1_Runyararo_Marongwe_JSL05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={20} />
                  View GitHub Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Podcast Web App" />
              </div>
              <div className="project-content">
                <h3>Podcast Web App</h3>
                <p>
                  A modular podcast app with reusable components that display podcast
                  previews, genres, and dynamic modals. Built with HTML, CSS, and
                  JavaScript using OOP.
                </p>
                <div className="tech-tags">
                  <span>JavaScript</span>
                  <span>OOP</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <a
                  href="https://github.com/Rue87/RUNMAR25118_fto2502_A_Runyararo-Marongwe_DJS02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={20} />
                  View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>
          
          <div className="social-links">
            <a
              href="https://github.com/Rue87"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/runyararo-marongwe-24835279"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:mrunya@gmail.com"
              aria-label="Email"
            >
              <Mail size={32} />
            </a>
          </div>
          
          <p className="email">
            Email: <a href="mailto:mrunya@gmail.com">mrunya@gmail.com</a>
          </p>
          <p className="copyright">&copy; 2025 Runyararo | All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;