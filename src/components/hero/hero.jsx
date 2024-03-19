import React from 'react'
import background from '../../assets/images/background.png'
import "./hero.css"

const Hero = () => (
    <section id="hero">
        <div className="hero-content">
          <span className='hello'>Hello,</span>
          <span className='hero-header'>I'm <span className='hero-name'>Gbenga</span><br /> from Nigeria.</span>
          <p className='hero-text'>I am a skilled web designer with experience in creating<br /> visually, appealing and beautiful websites</p>
          <button className='hero-btn'><a href='#contact'>Hire me</a></button>
          </div>
          <img src={background} alt='user' className='hero-img'/>
        </section>
  )  

export default Hero