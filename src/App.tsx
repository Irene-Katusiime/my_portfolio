
import {
  Mail,
  ArrowUpRight,
  Code2,
  Menu,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import profilePhoto from "./assets/irene.png";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Irene<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button className="mobile-menu" aria-label="Menu">
          <Menu size={24} />
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              SOFTWARE ENGINEERING APPRENTICE
            </div>

            <p className="greeting">Hello, I'm</p>

            <h1>
              Katusiime
              <br />
              <span>Irene.</span>
            </h1>

            <h2>
              Junior Full-Stack Developer
            </h2>

            <p className="hero-description">
              I build practical digital solutions through
              creative thinking, problem-solving and
              software development. I'm passionate about
              creating technology that makes a difference.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                <Mail size={17} /> Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Irene-Katusiime"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
               <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/irene-katusiime-9269923b9/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:irentusi256@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            {/* <div className="profile-card">
              <div className="profile-icon">
                <Code2 size={65} strokeWidth={1.2} />
              </div>

              <p className="profile-label">DEVELOPER</p>
              <h3>Turning ideas into</h3>
              <h3 className="blue-text">digital experiences.</h3>

              <div className="profile-line"></div>

              <p className="profile-footer">
                React · TypeScript · Python · Django
              </p> */}

              <div className="profile-image-container">
              <img
                src={profilePhoto}
                alt="Katusiime Irene"
                className="profile-image"
              />
            </div>
            </div>

            <div className="floating-tag tag-one">
              <span className="tag-dot"></span>
              Frontend
            </div>

            <div className="floating-tag tag-two">
              Backend Developer
            </div>
          {/* </div> */}
        </section>

        <section className="quick-info">
          <div>
            <span className="info-number">01</span>
            <span>Creative Problem Solver</span>
          </div>
          <div>
            <span className="info-number">02</span>
            <span>Full-Stack Development</span>
          </div>
          <div>
            <span className="info-number">03</span>
            <span>Continuous Learner</span>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <p>A little about my journey in technology.</p>
          </div>

          <div className="about-content">
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I'm Katusiime Irene, a Software Engineering
                apprentice at Refactory Academy with a
                Certificate in Software Engineering.
              </p>
              <p>
                I'm passionate about building useful digital
                solutions and exploring how technology can
                solve real-world challenges. I enjoy working
                across frontend and backend development,
                learning new technologies and collaborating
                with other developers.
              </p>
              <p>
                My goal is to grow as a Full-Stack Developer
                and contribute to meaningful technology projects.
              </p>
            </div>

            <div className="about-highlight">
              <div className="highlight-icon">
                <Code2 size={35} />
              </div>
              <h3>Building. Learning. Growing.</h3>
              <p>
                Turning ideas into functional and meaningful
                digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="section-label">WHAT I WORK WITH</p>
            <h2>Technical <span>Skills</span></h2>
            <p>Technologies and tools I'm learning and using.</p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Bootstrap</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>Django</span>
                <span>REST APIs</span>
                <span>Database Management</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools & Workflow</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Postman</span>
                <span>Agile / Scrum</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SOME OF MY WORK</p>
            <h2>Featured <span>Projects</span></h2>
            <p>Some projects I've worked on with fellow developers.</p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-number">PROJECT 01</div>
              <h3>SignConnect</h3>
              <p>
                A deaf-friendly communication platform designed
                to connect Deaf users, interpreters and hearing
                participants through Video Relay Interpreting.
              </p>
              <div className="skill-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Django</span>
              </div>
            </article>


            <article className="project-card">
              <div className="project-number">PROJECT 02</div>
              <h3>Nyondo General Hardware</h3>
              <p>
                A Hardware Management System developed to improve
                the management of sales, inventory, customers and
                reporting. I contributed to both frontend and backend
                development, helping build an integrated management
                solution.
              </p>
              <div className="skill-tags">
                <span>Frontend Development</span>
                <span>Backend Development</span>
                <span>Database Management</span>
              </div>
            </article>


            <article className="project-card">
              <div className="project-number">PROJECT 03</div>
              <h3>SkillProof</h3>
              <p>
               A Skill Passport Platform addressing the gap between
              having valuable skills and having credible proof of
              those skills. SkillProof aims to help African workers
              showcase and verify skills gained through informal
              experiences.
              </p>
              <div className="skill-tags">
                <span>Frontend</span>
                <span>Web Development</span>
                <span>Teamwork</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-number">PROJECT 04</div>
              <h3>Digital Buddy</h3>
              <p>
                An educational application developed during the
                Africa's Talking Hackathon to promote responsible
                internet use. It focuses on helping people understand
                how to use the internet safely, appropriately and
                responsibly.
              </p>
              <div className="skill-tags">
                <span>Digital Literacy</span>
                <span>Internet Safety</span>
                <span>Hackathon Project</span>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <p className="section-label">LET'S CONNECT</p>
            <h2>Have a project or opportunity in <span>mind?</span></h2>
            <p>
              I'd love to connect, collaborate and learn
              from new opportunities.
            </p>
            <a
              href="mailto:irentusi256@gmail.com"
              className="primary-button"
            >
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:irentusi256@gmail.com">Email</a>
            <a
              href="https://github.com/Irene-Katusiime"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/irene-katusiime-9269923b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
