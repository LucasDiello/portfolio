import React, { useState } from "react";
import { skills } from "../utils"

const SkillsContent = () => {
    const [skillDescription, setSkillDescription] = useState("Passe o mouse por cima de alguma habilidade");
  
    const handleMouseOver = (skillName) => {
      const foundSkill = skills.find((skill) => skill.name === skillName);
      if (foundSkill) {
        setSkillDescription(foundSkill.description);
      } else {
        setSkillDescription("Descrição não encontrada");
      }
    };
  
    return (
      <section className="content-skills">
        <div className="list-skills">
          <div className="abilities-using">
            <p>{skillDescription}</p>
          </div>
          <div className="list-content">
            {skills.map((skill) => (
              <div key={skill.id} onMouseOver={() => handleMouseOver(skill.name)} onMouseLeave={() => {
                setSkillDescription("Passe o mouse por cima de alguma habilidade");
              }}>
                <span className="hidd show">
                  <i>
                    {skill.path}
                  </i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsContent;