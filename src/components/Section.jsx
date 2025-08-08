import { FaReact, FaJava, FaAws } from "react-icons/fa";

// Ícones por título
const iconsMap = {
  "Front-End Developer": <FaReact className="icon-react" />,
  "Proficiência de Back-End": <FaJava className="icon-java" />,
  "Cloud e DevOps": <FaAws className="icon-aws" />,
};

// Item individual
const SkillItem = ({ title, details }) => (
  <div className="skill-item">
    <div className="icon">{iconsMap[title]}</div>
    <div className="skill-description">
      <h3 className="skill-title">{title}</h3>
      <p className="skill-details">{details}</p>
    </div>
  </div>
);

// Lista de habilidades
const skills = [
  {
    title: "Front-End Developer",
    details:
      "Experiência em UX/UI, HTML, CSS, JavaScript, e frameworks como React.",
  },
  {
    title: "Proficiência de Back-End",
    details: "Experiência com Java e Spring Framework.",
  },
  {
    title: "Cloud e DevOps",
    details: "Conhecimento em AWS, Docker, e práticas DevOps.",
  },
];

// Componente principal
const Section = () => {
  return (
    <section className="section">
      <div className="hardskills-header">
        <h2 className="hardskills-title">Skills</h2>
        <p className="hardskills-subtitle">Tecnologias que domino</p>
      </div>
      <div className="skills-content">
        {skills.map((skill) => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            details={skill.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
