// Skills.js
import './Skills.css';
import { useLanguage } from '../LanguageContext';

export default function Skills() {
  const { language, translations } = useLanguage();

  const skillsList = [
    { name: translations[language].skills.javaScript.name, description: translations[language].skills.javaScript.description, icon: "🟨" },
    { name: translations[language].skills.python.name, description: translations[language].skills.python.description, icon: "🐍" },
    { name: translations[language].skills.htmlCss.name, description: translations[language].skills.htmlCss.description, icon: "🌐" },
    { name: translations[language].skills.mongoDB.name, description: translations[language].skills.mongoDB.description, icon: "🍃" },
    { name: translations[language].skills.git.name, description: translations[language].skills.git.description, icon: "🔗" },
    { name: translations[language].skills.java.name, description: translations[language].skills.java.description, icon: "☕" },
    { name: translations[language].skills.cSharp.name, description: translations[language].skills.cSharp.description, icon: "💻" },
    { name: translations[language].skills.oracleSQL.name, description: translations[language].skills.oracleSQL.description, icon: "🗃️" },
    { name: translations[language].skills.jira.name, description: translations[language].skills.jira.description, icon: "📊" },
    { name: translations[language].skills.selenium.name, description: translations[language].skills.selenium.description, icon: "🧪" },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skillsTitle">{translations[language].skills.title}</h2>
      <div className="skillsGrid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skillCard">
            <span className="skillIcon">{skill.icon}</span>
            <h3 className="skillName">{skill.name}</h3>
            <p className="skillDescription">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
