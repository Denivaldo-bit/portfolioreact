import React from "react";
import fotoProjetoSpotify from "../assets/fotoProjetoSpotify.jpeg"; // Imagem ilustrativa

const project = {
  title: "Replica Spotify",
  description: "Uma aplicação incrível feita com React e Tailwind.",
  link: "https://github.com/Denivaldo-bit/replica-spotify",
};

const ProjectItem = ({ title, description, link }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-details">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-button"
    >
      Ver Projeto →
    </a>
  </div>
);

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <section className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">Projeto em Destaque</h2>
          <p className="projects-subtitle">
            Confira um dos meus principais projetos
          </p>

          <div className="projects-display">
            <div className="project-info">
              <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
            <div className="project-image-container">
              <img
                className="project-image"
                src={fotoProjetoSpotify}
                alt="Imagem do projeto Replica Spotify"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
