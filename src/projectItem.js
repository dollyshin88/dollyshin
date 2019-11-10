import React from 'react';

const ProjectItem = (props) => {
    return (
        <div className = 'projectItem' >
            <div className='outerCircle flexContainerRow flexCenterAlign'>
                <div className='projectPhotoCircle'>
                    <img src={props.image}></img>
                </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='projectDot'></div>
            <div className='projectDescription flexContainerColumn'>
                <div className='projectItem__header flexContainerRow'>
                    <div className='projectItem__headerText'>{props.name}</div>
                    <div className='flexContainerRow'>
                        <a target="_blank" href={props.liveSite} className='link linkPink projLink'>LiveSite</a>
                        <a target="_blank" href={props.gitHub} className='link linkPink projLink'>GitHub</a>
                    </div>
                </div>
                <div className='projectItem__body'>
                    {props.text}
                </div>
            </div>       
        </div>
    )
}

export default ProjectItem;