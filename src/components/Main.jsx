import React from "react";
import fotoEu from "../assets/fotoEu.png"; // Caminho relativo ao arquivo Main.jsx

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="about-container">
          <div className="about-text">
            <h1>
              Olá, sou Denni<br></br> Desenvolvedor web Criativo
              <br />
              <br />
            </h1>
            <p>
              Sou um construtor digital com uma mente estratégica e atenção
              cirúrgica aos detalhes. Gosto de transformar ideias em
              experiências reais — seja lapidando interfaces com React,
              estruturando backends escaláveis na AWS ou dominando algoritmos
              com Python e sys.stdin.readline().
              <br />
              <br /> Ao longo da minha jornada acadêmica, venho desenvolvendo
              habilidades em programação, bancos de dados, desenvolvimento web e
              mobile, além de fundamentos sólidos em engenharia de software e
              metodologias ágeis. Estou sempre em busca de soluções elegantes,
              funcionais e que realmente façam a diferença.
              <br />
            </p>
          </div>

          <div className="profile-image-container">
            <div className="profile-background"></div>
            <img
              className="profile-image"
              src={fotoEu}
              alt="Foto de perfil de Denivaldo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
