import React from 'react'
import './Projects.scss'
import ProjectsData from '../../assets/data/Projects'
import randomcolor from 'randomcolor';
const Projects = () => {
    const colors = ProjectsData.map(() => randomcolor());
    console.log(colors)
  return (
    <div className='projects'>
        <h3>Stuff I've Built So Far</h3>
        <div className="projects__container">
            {ProjectsData.map((project, index) => {
                return (
                    <div className="project__card" key={index} >
                        <div className="project__card__header" style={{background:colors[index]}} >
                            
                        </div>
                        <div className="project__card__body">
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <div className="project__card__footer">
                                <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
                                <a href={project.github} target="_blank" rel="noreferrer">Soruce Code</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects