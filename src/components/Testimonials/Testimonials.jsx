import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.JPG";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Client One',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.'

  },
  {
    avatar: AVTR2,
    name: 'Client Two',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.'

  },
  {
    avatar: AVTR3,
    name: 'Client Three',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.'

  },
  {
    avatar: AVTR4,
    name: 'Client Four',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.'

  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="clients__name">{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>

            )
          })
        }


        {/* comment section */}
        {/*         
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One"/>
          </div>
             <h5 className="clients__name">Client One</h5>
             <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.
             </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One"/>
            </div>
             <h5 className="clients__name">Client One</h5>
             <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.
             </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One"/>
          </div>
             <h5 className="clients__name">Client One</h5>
             <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque illo culpa consequuntur dolore voluptas veniam nesciunt pariatur adipisci architecto.
             </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials
