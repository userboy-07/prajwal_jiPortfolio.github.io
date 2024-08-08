import React from 'react'
import './footer.css'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PRAJWAL</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><SiFacebook/></a>
        <a href="https://instagram.com"><RiInstagramFill/></a>
        <a href="https://twitter.com"><ImTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prajwal_Poudel. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
