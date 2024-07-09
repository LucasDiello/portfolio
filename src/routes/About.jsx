import React from "react";
import "../styles/animation.css";
import "../styles/about.css";
import { Link } from "react-scroll";

function About() {
  return (
    <section className="about-me" id="about">
      <div className="heading-text hidd show">
        <h2 className="heading-5-a">Sobre mim</h2>
        <div className="about-me-text">
          <p className="para-5-a leading-5">
            Tenho 21 anos e sou desenvolvedor Full Stack com enfâse em front
            end. Esta posição me permite explorar tanto o lado do front-end
            quanto do back-end. <br />
            Sou capaz de criar aplicações web completas, desde a interface do
            usuário até a lógica de negócios e o gerenciamento de bancos de
            dados. <br />
            Meu objetivo é sempre fornecer soluções eficazes e eficientes, que
            atendam às necessidades do cliente e superem suas expectativas.{" "}
            <br />
            Estou sempre em busca de novas oportunidades de aprendizado, e estou
            ansioso para meus próximos desafios profissionais.{" "}
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000} href="#"
             className="bg-inherit hover:cursor-pointer  font-bold text-base text-[#93b0c6] p-0 border-none">
              Contate me!
            </Link>
            <br />{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
