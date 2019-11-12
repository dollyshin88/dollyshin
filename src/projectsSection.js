import React from 'react';
import ProjectItem from './projectItem';
import sheepProjImg from './images/sheep_project.png';
import samasanaProjImg from './images/samasana_project.png';
import neurodbProjImg from './images/neurodb_project.png';


const ProjectsSection = () => {
    const projects = [
        { 
            name: 'SHEEP',
            img: sheepProjImg,
            liveSite: 'https://dollyshin88.github.io/sheep/',
            gitHub: 'https://github.com/dollyshin88/sheep', 
            text: 'Sheep is a simple and relaxing game where you can roam about a 3D nature space as a sheep. The idea came from my own need to take a few minutes of mental break after an intense coding session.',
            stack: 'JavaScript, Three.js, HTML5, CSS3, Webpack'},
        {
            name: 'SAMASANA',
            img: samasanaProjImg,
            liveSite: 'https://samasana.herokuapp.com/',
            gitHub: 'https://github.com/dollyshin88/samasana',
            text: 'Samasana, meaning an act of putting together, is a clone site of Asana, a task/project management software. This is my very first full-stack project and showcases the knowledge and skills gained from four months of an intense bootcamp program.',
            stack: 'Ruby on Rails, PostgresSQL JavaScript, React, Redux, SASS, Webpack'
        },
        {
            name: 'NEURODB',
            img: neurodbProjImg,
            liveSite: 'https://neurodb.herokuapp.com/',
            gitHub: 'https://github.com/aliashafi/NeuroDB',
            text: 'NeuroDB is a database tool to help researchers (particularly those studying intracranial Electrocorticography (ECoG)) manage patient metadata and research information. It was created as a prototype for a lab and it resulted in moving forward with building a full-blown product.',
            stack: 'Express, MongoDB, Mongoose, Node, JavaScript, React, Redux, SASS'
        },
    ]
    return (
        <div id='projectSection' className='sectionBuff'>
            <div className='headerDivider'></div>
            <div className='headerText'>Recent Projects</div>
            {projects.map(proj => (
                <ProjectItem 
                    name={proj.name} 
                    image={proj.img}
                    liveSite={proj.liveSite}
                    gitHub={proj.gitHub}
                    text={proj.text}
                    stack={proj.stack}
                />
            ))}
        </div>
    )
}

export default ProjectsSection;