// Skills.js
import './Skills.css';

export default function Skills(){
    const skillsList = [
        { name: "JavaScript", description: "Experienced in ES6+, React, Node.js", icon: "🟨" },
        { name: "Python", description: "Proficient in Flask and data analysis", icon: "🐍" },
        { name: "HTML & CSS", description: "Skilled in responsive and accessible design", icon: "🌐" },
        { name: "MongoDB", description: "Database management and queries", icon: "🍃" },
        { name: "Git", description: "Version control and collaboration", icon: "🔗" },
        { name: "Java", description: "Object-oriented programming and development", icon: "☕" },
        { name: "C#", description: "Experienced with .NET framework", icon: "💻" },
        { name: "Oracle SQL", description: "Database queries and management", icon: "🗃️" },
        { name: "Jira", description: "Project management and issue tracking", icon: "📊" },
        { name: "Selenium WebDriver", description: "Automated testing and quality assurance", icon: "🧪" },
      ];

  return (
    <section id="skills" className="skills">
      <h2 className="skillsTitle">My Skills</h2>
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
};

