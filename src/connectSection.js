import React from 'react';

const ConnectSection = () => {
    return (
        <div id='connectSection' className='sectionBuff'>
            <div className='headerDivider'></div>
            <div className='connectHeader'>Connect</div>
            <div className='connectCardGroup'>
                <a href='https://www.linkedin.com/in/dollyshin88/' target='_blank' className='connectCard flexContainerRow flexCenterAlign clickable'>
                    <div><i class="fab fa-linkedin linkedinIcon"></i></div>
                    <div>LinkedIn</div>
                </a>
                <a href='https://github.com/dollyshin88' target='_blank' className='connectCard flexContainerRow flexCenterAlign'>
                    <div><i class="fab fa-github iconBk"></i></div>
                    <div>GitHub</div>
                </a>
                <a href='https://angel.co/dollyshin88' target='_blank' className='connectCard flexContainerRow flexCenterAlign'>
                    <div><i class="fab fa-angellist iconBk"></i></div>
                    <div>AngelList</div>
                </a>
            </div>
        </div>
    )
}

export default ConnectSection;