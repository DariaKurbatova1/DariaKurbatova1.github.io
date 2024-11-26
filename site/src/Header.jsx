import './Header.css';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  const { language, toggleLanguage, translations } = useLanguage();
  const headerLinks = translations[language].header;
  return (
    
    <header className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Portfolio</h1>
        <div className="buttonGroup">
          <button onClick={toggleLanguage} className="languageToggle">
            {language === 'en' ? 'Français' : 'English'}
          </button>
          <button className="hamburger" onClick={toggleNav}>
            &#9776; 
          </button>
        </div>
        </div>
        <nav className={`headerNav ${isNavOpen ? 'open' : ''}`}>
        <a href="#about" className="headerLink">{headerLinks.about}</a>
        <a href="#projects" className="headerLink">{headerLinks.projects}</a>
        <a href="#experience" className="headerLink">{headerLinks.experience}</a>
        <a href="#skills" className="headerLink">{headerLinks.skills}</a>
        <a href="#contact" className="headerLink">{headerLinks.contact}</a>
        </nav>
    </header>
  );
};