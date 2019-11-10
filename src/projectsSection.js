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
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt error nisi veniam eius totam minima ducimus modi fugit sapiente non fugiat dignissimos maxime asperiores adipisci, eligendi magnam unde. Commodi, molestiae' },
        {
            name: 'SAMASANA',
            img: samasanaProjImg,
            liveSite: 'https://samasana.herokuapp.com/',
            gitHub: 'https://github.com/dollyshin88/samasana',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt error nisi veniam eius totam minima ducimus modi fugit sapiente non fugiat dignissimos maxime asperiores adipisci, eligendi magnam unde. Commodi, molestiae'
        },
        {
            name: 'NEURODB',
            img: neurodbProjImg,
            liveSite: 'https://neurodb.herokuapp.com/',
            gitHub: 'https://github.com/aliashafi/NeuroDB',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt error nisi veniam eius totam minima ducimus modi fugit sapiente non fugiat dignissimos maxime asperiores adipisci, eligendi magnam unde. Commodi, molestiae'
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
                />
            ))}
        </div>
    )
}

export default ProjectsSection;