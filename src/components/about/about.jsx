import React, { useState } from 'react'
import './about.css'
import garet1 from '../../assets/images/garet1.png'

const About = () => {

    const [toggle, setToggle] = useState(1)
    

    function updateToggle(id){
        setToggle(id)
    }
 


    return (
    <section id='about'>
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={garet1} alt='user' />
                </div>
                <div className="about-col-2">
                    <h1 className='subtitle'>About me</h1>
                    <p>
                    I'm an Entry-level front-end developer with 3 years of experience in maintaining and building web pages. Seeking for new opportunities and challenges that will expand my skill set. Adept at identifying opportunities to enhance front-end design and improve the UX.
                    </p>
                    <div className="tab-titles">
                        <p className={toggle === 1 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(1)}>Skils</p>
                        <p className={toggle === 2 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(2)}>Experience</p>
                        <p className={toggle === 3 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(3)}>Education</p>
                    </div>
                    <div className={toggle === 1 ? "tab-content" : "content"} tab-content>
                        <ul>
                            <li><span>UI/UX</span><br />Designing web app interfaces<br />
                            <small>Figma, Photoshop, Balsamiq</small></li>
                            <li><span>Web development</span><br />Web app Development<br />
                            <small>HTML, CSS, Tailwind, Javascript, ReactJS</small></li>
                            <li><span>Other skills</span><br /><small>Git, Debugging, JQuery, Bootstrap, Troubleshooting, Computer Networking</small></li>
                        </ul>
                    </div>
                    <div className={toggle === 2 ? "tab-content" : "content"}>
                        <ul>
                            <li><span>2021</span><br />Designing web/app interfaces(UI/UX)</li>
                            <li><span>2019</span><br />FrontEnd Development</li>
                            <li><span>2018</span><br />Basic of Computer Networking</li>
                            <li><span>2016</span><br />Computer Hardware/troubleshooting</li>
                        </ul>
                    </div>
                    <div className={toggle === 3 ? "tab-content" : "content"} tab-content>
                        <ul>
                            <li><span>2017 - 2021</span><br />Obafemi Awolowo University<br /><small>Computer science(BSC)</small></li>
                            <li><span>2013 - 2015</span><br />Federal School Of Statistics<br /><small>Computer science(OND)</small></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About