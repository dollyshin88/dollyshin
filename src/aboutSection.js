import React from 'react';
import profilePhoto from './images/profile_photo_web.jpg';
import resume from './images/Dolly_Shin_Resume.pdf';

const AboutSection = () => {

    return (
        <div id='aboutSection' className='sectionBuff'>
            <div className='leftSection flexContainerColumn flexTopMidAlign'>
                <div className='photoCircle'>
                    <img src={profilePhoto}/>
                </div>
                <div className='zigzag scriptType'>/\/\/\/\/\</div>
                <div className='flexContainerColumn textBlockGroup'>
                    <div className='textBlock'>
                        <div className='hoverShowCard clickable'>
                            <div className='subHeaderText hoverPink'>Savvy</div>
                            <div className='showCard'>
                                <p className='supportText cardText'>A tech consultant-turned-developer, I bring 5 years of software integration and roll-out experience. From deisgn to deployment, I've been through it all.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='textBlock'>
                        <div className='hoverShowCard clickable'>
                            <div className='subHeaderText hoverPink'>Collaborative</div>
                            <div className='showCard'>
                                <p className='supportText cardText'>I have my views, but I openly invite different ones. I love to bounce ideas with others and see an idea mold into something better. And more importantly, I like to have fun while working together!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='rightSection flexContainerColumn'>
                <div className='headlineText'>
                    I am a full stack developer based in <span>San Francisco</span>, with a passion for creating <span>purposful</span> and <span>intuitive</span> applications.
                </div>
                <div className='btn btnHoverYellow' onClick={() => { window.open('./static/media/Dolly_Shin_Resume.21bfa07f.pdf') }}>
                    <p>Download Resume</p>
                </div>
                
            </div>
        </div>
    );
}

export default AboutSection;