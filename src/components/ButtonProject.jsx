import React from 'react'
import { DiGithubAlt } from 'react-icons/di'
import { TbWorldCancel } from 'react-icons/tb'

const ButtonProject = ({ acess,text, icon }) => {

  return (
    <div class="button-icon">
    <div class="icon-project">
      {
        icon
      }
    </div>
    <div class="cube">
      <span class="side front">{acess}</span>
      <span class="side top"> {text}</span>
    </div>
  </div>
  )
}

export default ButtonProject