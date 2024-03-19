import React from 'react'
import "./portfolio.css"
import gh from '../../assets/images/gh.png'

const Portfolio = () => (
    <section id='portfolio'>
        <div className="container">
            <h1 className='subtitle'>My work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={gh} alt='work' />
                    <div className="layer">
                        <h3>Social media</h3>
                        <p>The app connects you to the talented people around the world. Download it from playstore.</p>
                        <a href='#'>View more</a>
                    </div>
                </div>
                <div className="work">
                    <img src={gh} alt='work' />
                    <div className="layer">
                        <h3>Social media</h3>
                        <p>The app connects you to the talented people around the world. Download it from playstore.</p>
                        <a href='#'>View more</a>
                    </div>
                </div>
                <div className="work">
                    <img src={gh} alt='work' /> 
                    <div className="layer">
                        <h3>Social media</h3>
                        <p>The app connects you to the talented people around the world. Download it from playstore.</p>
                        <a href='#'>View more</a>
                    </div>
                </div>
            </div>
            <a href='#' className='btn'>See more</a>
        </div>
    </section>
  )

export default Portfolio                     