import React from 'react'
import './experience.css'
import { BsShieldFillCheck } from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience'>
      <h5> Skills on Me</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsShieldFillCheck className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className="textlight">Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="textlight">Intermediate</small>
              </div>
            </article> 

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className="textlight">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className="textlight">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
            <div>
            <h4>React</h4>
              <small className="textlight">Experienced</small>
            </div>
            </article>
          </div>

        </div>

{/* End of Frontend Development */}


{/* Beginning of Backend Development */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className="textlight">Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
             <div>
             <h4>MongoDB</h4>
              <small className="textlight">Intermediate</small>
             </div>
            </article> 

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className="textlight">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
              <small className="textlight">Intermediate</small>
              l̥</div>
            </article>

            <article className='experience__details'>
              <BsShieldFillCheck  className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="textlight">Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
