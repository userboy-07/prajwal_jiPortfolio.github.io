import React from 'react'
import './nav.css'
import { HiHome } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { useState } from "react";

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav
