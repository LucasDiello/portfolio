import React from 'react'
import Ecommerce from '../assets/e-commerce-fa3a01a1.jpeg'
import projectMusics from '../assets/project-musics-d7e31baf.jpeg'
import projectWallet from '../assets/projectWallet-4912858c.jpeg'

export const ProjectsContent = () => {
  return (
    <section class="project-content">
        <div class="links-project">
            <a class="hidd show" href="#">
            <img src={Ecommerce} alt=""></img></a>
            <a class="hidd show" href="#">
            <img src={projectMusics} alt=""></img>
            </a><a class="hidd show" href="#">
            <img src={projectWallet} alt=""></img></a>
            </div>
            <div class="route-to-projects">
                <button class="about-project glow-on-hover font-sans">Mais Sobre</button>
                </div>
                </section>
)
}
