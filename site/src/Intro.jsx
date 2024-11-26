/* eslint-disable react/no-unescaped-entities */
import './Intro.css';
import profilePicture from './assets/profilep.png';
import { useLanguage } from '../LanguageContext';

export default function Intro() {
  const { language, translations } = useLanguage();
  const intro = translations[language].intro;

  return (
    <section id="about" className="intro">
      <img
        src={profilePicture}
        alt="profile picture"
        className="introImage"
      />
      <div className="introText">
        <h2 className="introTitle">{intro.title}</h2>
        <p className="introDescription">{intro.description}</p>
      </div>
    </section>
  );
}
