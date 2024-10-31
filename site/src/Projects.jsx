import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Real Estate Web App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      techStack: ["Flask", "MongoDB", "Bootstrap"],
      demoLink: "#", 
      codeLink: "https://github.com/DariaKurbatova1/RealEstateApp", 
    },
    {
      title: "3d renderer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      techStack: ["java"],
      demoLink: "#",
      codeLink: "https://github.com/DariaKurbatova1/3DRenderer",
    },
    {
      title: "Speed Typing App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      techStack: ["C#"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projectsTitle">Projects</h2>
      <div className="projectsGrid">
        {projectList.map((project, index) => (
          <div key={index} className="project__card">
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDescription">{project.description}</p>
            <p className="projectTech">Tech Stack: {project.techStack.join(', ')}</p>
            <div className="projectLinks">
              <a href={project.demoLink} className="projectLink" target="_blank">Live Demo</a>
              <a href={project.codeLink} className="projectLink" target="_blank" >GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
