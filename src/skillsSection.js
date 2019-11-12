import React from 'react';
import gitIcon from './images/svg/gitIcon.svg';
import jsIcon from './images/svg/jsIcon.svg';
import cssIcon from './images/svg/cssIcon.svg';
import expressIcon from './images/svg/expressIcon.svg';
import htmlIcon from './images/svg/htmlIcon.svg';
import mongoIcon from './images/svg/mongoIcon.svg';
import nodeIcon from './images/svg/nodeIcon.svg';
import postIcon from './images/svg/postIcon.svg';
import railsIcon from './images/svg/railsIcon.svg';
import reduxIcon from './images/svg/reduxIcon.svg';
import sassIcon from './images/svg/sassIcon.svg';
import rubyIcon from './images/svg/rubyIcon.svg';
import reactIcon from './images/svg/reactIcon.svg';



const SkillsSection = () => {
    return (
        <div id='skillsSection'>
            <div className='segmentHeader boldTextYellow'>Skills:</div>
            <div className='skillsIcon__groupWrap flexContainerRow flexCenterAlign flexWrap'>
                
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='JavaScript' src={jsIcon} />
                    <div className='label upMargin'>JavaScript</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Ruby' src={rubyIcon} />
                    <div className='label upMargin'>Ruby</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Rails' src={railsIcon} />
                    <div className='label upMargin'>Rails</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='React' src={reactIcon} />
                    <div className='label upMargin'>React</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Redux' src={reduxIcon} />
                    <div className='label upMargin'>Redux</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='HTML5' src={htmlIcon} />
                    <div className='label upMargin'>HTML5</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='CSS3' src={cssIcon} />
                    <div className='label upMargin'>CSS3</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='SASS' src={sassIcon} />
                    <div className='label upMargin'>SASS</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Node' src={nodeIcon} />
                    <div className='label upMargin'>Node.js</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Express' src={expressIcon} />
                    <div className='label upMargin'>Express</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='Git' src={gitIcon} />
                    <div className='label upMargin'>Git</div>
                </div>
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='PostgresSQL' src={postIcon} />
                    <div className='label upMargin'>PostgresSQL</div>
                </div>
                
                <div className='svgContainer flexContainerColumn flexCenterAlign'>
                    <img alt='MongoDB' src={mongoIcon} />
                    <div className='label upMargin'>MongoDB</div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;