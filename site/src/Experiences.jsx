import './Experiences.css';
import { useLanguage } from '../LanguageContext';

export default function Experiences() {
  const { language, translations } = useLanguage();
  const experiences = translations[language].experiences.items;

  return (
    <section id="experience" className="experiences">
      <h1 className="experiencesMainTitle">{translations[language].experiences.title}</h1>

      <h2 className="experiencesTitle">{translations[language].experiencesTitle}</h2>
      <div className="experiencesList">
        {experiences.map((experience, index) => (
          <div key={index} className="experienceCard">
            <h3 className="experiencePosition">{experience.position}</h3>
            <p className="experienceCompany">
              {experience.company}, {experience.location}
            </p>
            <p className="experienceDates">{experience.dates}</p>
            <p className="experienceDescription">{experience.description}</p>
            <ul className="experienceAchievements">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="achievementItem">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
