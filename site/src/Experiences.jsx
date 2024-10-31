import './Experiences.css';

export default function Experiences(){
  const experiences = [
    {
      position: "Software Tester Internship",
      company: "E-Point",
      location: "Montreal, Canada (Remote)",
      dates: "January 2024 – May 2024",
      description: "Participated in the testing of the E-point web application.",
      achievements: [
        "Performed ad-hoc and exploratory testing, reported bugs using Jira.",
        "Developed test cases for different parts of the application using Qase system."
      ]
    },
    {
      position: "Software Tester (Academic Project)",
      company: "Hitek Computer School",
      location: "Vancouver, BC",
      dates: "April 2023 – December 2023",
      description: "Project: Loan Management System, a web-based bank loan prequalification system.",
      achievements: [
        "Performed ad-hoc testing, reported bugs using Elementool defect tracking system, and verified bug fixes.",
        "Developed test plans and generated test cases for different parts of the application.",
        "Performed various types of testing, such as Functional, Regression, and System.",
        "Conducted Compatibility testing of the web application on different browsers.",
        "Conducted variance management by analyzing and verifying test results, providing status and progress reports using TestLink.",
        "Created automated test scripts using UFT and Selenium WebDriver."
      ]
    }
  ];

  return (
    <section id="experience" className="experiences">
      <h2 className="experiencesTitle">Experiences</h2>
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
