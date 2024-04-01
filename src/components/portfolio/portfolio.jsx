import React from 'react'
import "./portfolio.css"
import firstproject from '../../assets/images/firstproject.png'
import secondproject from '../../assets/images/secondproject.png'
import thirdproject from '../../assets/images/thirdproject.png'

const Portfolio = () => (
    <section id='portfolio'>
        <div className="container">
            <h1 className='subtitle'>My work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={firstproject} alt='work' />
                    <div className="layer">
                        <h3>AI learning website</h3>
                        <p>Fully responsive modern UI/UX website in ReactJS.</p>
                        <a href='https://oluwagbemiga10.github.io/portfolio-project1/' target='_blank'>View more</a>
                    </div>
                </div>
                <div className="work">
                    <img src={secondproject} alt='work' />
                    <div className="layer">
                        <h3>Modern Restaurant Website</h3>
                        <p>This is a fully responsive restaurant application in ReactJS.</p>
                        <a href='https://oluwagbemiga10.github.io/portfolio-project2/' target='_blank'>View more</a>
                    </div>
                </div>
                <div className="work">
                    <img src={thirdproject} alt='work' /> 
                    <div className="layer">
                        <h3>Payment Platform Website</h3>
                        <p>Fully responsive website with modern UI/UX in ReactJS with Tailwind.</p>
                        <a href='https://oluwagbemiga10.github.io/portfolio-project3/' target='_blank'>View more</a>
                    </div>
                </div>
            </div>
            <a href='https://github.com/oluwagbemiga10?tab=repositories' target='_blank' className='btn'>See more</a>
        </div>
    </section>
  )

export default Portfolio                     