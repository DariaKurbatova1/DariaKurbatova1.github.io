import './Footer.css';
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'

export default function Footer(){
  return (
    <footer className="footer">
      <p className="footerText">© {new Date().getFullYear()} Daria. All rights reserved.</p>
      <div className="socialLinks">
        <a href="https://github.com/DariaKurbatova1" target="_blank" rel="noopener noreferrer" className="socialLink">
          <img src={githubIcon} alt="GitHub" className="socialIcon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/daria-kurbatova-987285235/" target="_blank" rel="noopener noreferrer" className="socialLink">
          <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};


