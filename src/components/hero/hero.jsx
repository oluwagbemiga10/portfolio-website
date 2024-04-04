import React from 'react'
import sa from '../../assets/images/sa.png'
import "./hero.css"

const Hero = () => (
    <section id="hero">
        <div className="hero-content">
          <span className='hello'>Hello,</span>
          <span className='hero-header'>I'm <span className='hero-name'>Gbenga Oyelami</span><br /> from Nigeria.</span>
          <p className='hero-text'>I am a skilled frontend developer with a knack for creating visually, intuitive, <br />mobile responsive, user centered and high performing web applications.</p>
          <button className='hero-btn'><a href='#contact'>Hire me</a></button>
          </div>
          <img src={sa} alt='user' className='hero-img'/>
          <div className='overlay'></div>
        </section>
  )  

export default Hero