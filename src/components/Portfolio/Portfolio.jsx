import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio-img1.webp";
import IMG2 from "../../assets/portfolio-img2.webp";
import IMG3 from "../../assets/portfolio-img3.webp";
import IMG4 from "../../assets/portfolio-img4.webp";
import IMG5 from "../../assets/portfolio-img5.webp";
import IMG6 from "../../assets/portfolio-img6.webp";


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Charlie the Cat',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20117815-Charlie-the-Cat'
  },
  {
    id:2,
    image: IMG2,
    title: 'Crazy Pencil',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20117808-Crazy-Pencil'
  },
  {
    id:3,
    image: IMG3,
    title: 'Leica M6',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20114000-Leica-m6'
  },
  {
    id:4,
    image: IMG4,
    title: 'Solar Panel Monitoring',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20118473--SolarQ-Solar-Panel-Monitoring-App'
  },
  {
    id:5,
    image: IMG5,
    title: 'Hexa-Horse',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20117820-Rampant-Hexa-Horse'
  },
  {
    id:6,
    image: IMG6,
    title: 'Solana',
    github:'https://github.com' ,
    demo: 'https://dribbble.com/shots/20080890-Solana-Illustrations'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo}) => {
        return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>            
        </article>
        )
})
       }
       {/* End of mapping section */}


       {/* If not mapped the portfolio cards can be viewed as........ */}
         {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta"><a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article> 
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article> */}
      </div>
    </section>
  )
}

export default Portfolio
