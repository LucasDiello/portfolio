import React from "react";
import "../styles/perfil.css";
import "../styles/animation.css"

const Perfil = () => {
  return (
    <section className="container-perfil">
      <div className="image-perfil"></div>
      <div className="arrow-perfil"></div>
      <div className="arrow2-perfil"></div>
      <div className="content-perfil hidd show">
        <h3 className="text-sm text-center mr-4 ml-4 lg:text-xs">
          OLÁ, SOU DESENVOLVEDOR FULL STACK REACTJS / JAVA SPRING BOOT E ME
          CHAMO -{" "}
        </h3>
        <h1>LUCAS DIELLO</h1>
        <div className="container-dark">
          <a href="#" className="hexagon">
            <div className="side"></div>
            <div className="side"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
