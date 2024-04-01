import React, { useState } from 'react'
import './header.css'
import Gbengao1 from '../../assets/images/Gbengao1.png'
import menu from '../../assets/images/menu.png'
import close from '../../assets/images/close.png'



const Header = () => {

const [toggle, setToggle] = useState(false)



  return(
    <section id='header'>
      <div className='container'>
        <nav>
          <img src={Gbengao1} className='logo' alt='logo' />
          <ul>
            <li><a href='#header'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
          <img src={toggle ? close : menu} className='mobile-menu' alt='menu' onClick={()=>setToggle(!toggle)} />
          <div className='menu-list' style={{display : toggle ? "flex" : "none"}}>
            <li><a href='#header' className='list' onClick={()=>setToggle(false)}>Home</a></li>
            <li><a href='#about' className='list' onClick={()=>setToggle(false)}>About</a></li>
            <li><a href='#services' className='list' onClick={()=>setToggle(false)}>Services</a></li>
            <li><a href='#portfolio'className='list' onClick={()=>setToggle(false)}>Portfolio</a></li>
            <li><a href='#contact' className='list' onClick={()=>setToggle(false)}>Contact</a></li>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Header