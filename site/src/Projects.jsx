import './Projects.css';
import { useLanguage } from '../LanguageContext'; 

export default function Projects() {
  const { language } = useLanguage();
  const projectList = [
    {
      title: language === 'en' ? "Real Estate Web App" : "Application Web Immobilière",
      description: language === 'en' ? "A web app for browsing and filtering real estate properties." : "Une application web pour naviguer et filtrer les propriétés immobilières.",
      techStack: ["Flask", "MongoDB", "Bootstrap"],
      demoLink: "https://realestateapplication.onrender.com/", 
      codeLink: "https://github.com/DariaKurbatova1/RealEstateApp", 
    },
    {
      title: language === 'en' ? "3D Renderer" : "Rendu 3D",
      description: language === 'en' ? "An interactive Java app that allows users to render 3D shapes." : "Une application Java interactive qui permet aux utilisateurs de rendre des formes 3D.",
      techStack: ["Java", "Swing GUI"],
      demoLink: "/demo",
      codeLink: "https://github.com/DariaKurbatova1/3DRenderer",
    },
    {
      title: language === 'en' ? "Speed Typing App" : "Application de Dactylographie Rapide",
      description: language === 'en' ? "Application that measure's user typing speed." : "Application qui mesure le vitesse de dactylographie de l'utilisateur.",
      techStack: ["C#"],
      demoLink: "/typingDemo",
      codeLink: "https://github.com/DariaKurbatova1/TypingApp",
      isUnderConstruction: true,
    },
  ];


  return (
    <section id="projects" className="projects">
      <h2 className="projectsTitle">{language === 'en' ? "Projects" : "Projets"}</h2>
      <div className="projectsGrid">
        {projectList.map((project, index) => (
          <div key={index} className="project__card">
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDescription">{project.description}</p>
            {
              <>
                <p className="projectTech">Tech Stack: {project.techStack.join(', ')}</p>
                <div className="projectLinks">
                  <a href={project.demoLink} className="projectLink" target="_blank">Live Demo</a>
                  <a href={project.codeLink} className="projectLink" target="_blank">GitHub</a>
                </div>
              </>
            }
          </div>
        ))}
      </div>
    </section>
  );
};
