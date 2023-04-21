import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { SiSequelize } from 'react-icons/si'
import { FaGitSquare } from 'react-icons/fa'
import { SiVisualstudio } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import postgresqlImage from '../images/postgresql.png';



const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className = "skills-div" id="skills">
      <FaReact className="react"/> 
      <SiJavascript className="javascript"/> 
      <FaPython className="python"/>
      <img src={postgresqlImage} alt="PostgreSQL" className="postgresql" />
      <SiSequelize className="sequel"/>
      <FaNodeJs className="nodejs"/> 
      <FaHtml5 className="html"/> 
      <FaCss3Alt className="css3"/>
      <DiDjango className="django"/>
      <FaGithub className="github"/>
      <FaGitSquare className="git"/>
      <SiVisualstudio className="vss"/>
      <FaBootstrap className="bootstrap"/>
      <SiTailwindcss className="tailwind"/>
      </div>
    </div>
  )
}
export default Skills