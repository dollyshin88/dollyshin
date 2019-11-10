import React from 'react';

const ConnectSection = () => {
    return (
        <div id='connectSection' className='sectionBuff'>
            <div className='headerDivider'></div>
            <div className='connectHeader'>Connect</div>
            <div className='connectCardGroup'>
                <div className='connectCard flexContainerRow flexCenterAlign'>
                    <div><i class="fab fa-linkedin linkedinIcon"></i></div>
                    <div>LinkedIn</div>
                </div>
                <div className='connectCard flexContainerRow flexCenterAlign'>
                    <div><i class="fab fa-github iconBk"></i></div>
                    <div>GitHub</div>
                </div>
                <div className='connectCard flexContainerRow flexCenterAlign'>
                    <div><i class="fab fa-angellist iconBk"></i>

</div>
                    <div>AngelList</div>
                </div>
            </div>
        </div>
    )
}

export default ConnectSection;