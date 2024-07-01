import React from 'react'
import Ecommerce from '../assets/e-commerce-fa3a01a1.jpeg'
import projectMusics from '../assets/project-musics-d7e31baf.jpeg'
import projectWallet from '../assets/projectWallet-4912858c.jpeg'
import { useNavigate } from 'react-router'

const ProjectsContent = () => {

  const navigate = useNavigate()
  return (
    <section className="project-content">
        <div className="links-project">
            <a className="hidd show" href="#">
            <img src={Ecommerce} alt=""></img></a>
            <a className="hidd show" href="#">
            <img src={projectMusics} alt=""></img>
            </a><a className="hidd show" href="#">
            <img src={projectWallet} alt=""></img></a>
            </div>
            <div className="route-to-projects">
                <a href='/projects' className="no-underline flex justify-center items-center about-project z-50 glow-on-hover font-sans" onClick={console.log("cliquei")}>
                  Mais Sobre</a>
                </div>
                </section>
)
}

export default ProjectsContent
