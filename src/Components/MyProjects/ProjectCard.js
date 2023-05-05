import React from "react"
import { NavLink } from "react-router-dom";
import './ProjectCardStyles.css'

function ProjectCard(props){
    return (
            <div className='project-card'>
                <img src={props.img} alt="image"/>
                    <div className="project-btns">
                        <NavLink to={props.view} target="blank"
                        className='btn'
                        >VIEW</NavLink>
                        <NavLink to={props.source} target="blank"
                        className='btn'
                        >SOURCE</NavLink>
                    </div>
                <h2 className="project-title"> {props.heading}</h2>
                <p className="project-details">{props.paragraph}</p>
            </div>
    )
}

export default ProjectCard