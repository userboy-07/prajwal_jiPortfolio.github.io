import React from 'react'
import './about.css'
import me1 from "../../assets/me1.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";
const About = () => {
  return (
    <section id='about'> 
    <h5>GET TO KNOW</h5>    
    <h2>ABOUT ME</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={me1} alt="About Image" />
        </div>

      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward  className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ years working</small>
          </article>

          <article className='about__card'>
            <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          
          <article className='about__card'>
            <AiOutlineProject  className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>

        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis molestiae dignissimos odio inventore excepturi accusamus expedita quasi quisquam numquam distinctio, 
          officiis alias laudantium, iure vero nulla? Harum, debitis corporis.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
