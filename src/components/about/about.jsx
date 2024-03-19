import React, { useState } from 'react'
import './about.css'
import ai from '../../assets/images/user.png'

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
                    <img src={ai} alt='user' />
                </div>
                <div className="about-col-2">
                    <h1 className='subtitle'>About me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda nisi quia officiis voluptate corporis quam asperiores optio voluptatibus, accusamus, necessitatibus officia reiciendis mollitia quisquam deserunt dignissimos explicabo perspiciatis autem.
                    </p>
                    <div className="tab-titles">
                        <p className={toggle === 1 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(1)}>Skils</p>
                        <p className={toggle === 2 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(2)}>Experience</p>
                        <p className={toggle === 3 ? "tab-links active-link" : "tab-links"} onClick={()=>updateToggle(3)}>Education</p>
                    </div>
                    <div className={toggle === 1 ? "tab-content" : "content"} tab-content>
                        <ul>
                            <li><span>UI/UX</span><br />Designing web app interfaces</li>
                            <li><span>Web development</span><br />Web app Development</li>
                            <li><span>App development</span><br />Building Android/IOS apps</li>
                        </ul>
                    </div>
                    <div className={toggle === 2 ? "tab-content" : "content"}>
                        <ul>
                            <li><span>2021 - Current</span><br />Designing web app interfaces</li>
                            <li><span>2019 - 2021</span><br />Web app Development</li>
                            <li><span>2017 - 2019</span><br />Building Android/IOS apps</li>
                            <li><span>2016 - 2017</span><br />Building Android/IOS apps</li>
                        </ul>
                    </div>
                    <div className={toggle === 3 ? "tab-content" : "content"} tab-content>
                        <ul>
                            <li><span>2016</span><br />UI/UX Design Training at ET Institute</li>
                            <li><span>2012</span><br />MBA from MIT Bangolore</li>
                            <li><span>2014</span><br />BBA from ISM Bangolore</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About