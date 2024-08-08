import React from 'react'
import './contact.css'
import { IoMdMailUnread } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react'; 
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6h45zl', 'template_s1x8epk', form.current, 'Zh-MXJMuhSTbjj7U7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <IoMdMailUnread className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:paudelprajwal6@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icons'/>
            <h4>Messenger</h4>
            <h5>Prajwal Poudel</h5>
            <a href="https://m.me/100077255462430"  target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icons'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https:/api.whatsapp.com/send?phone=+977-9843918716"  target='_blank'>Send a message</a>
          </article>
        </div>

        {/* End fo contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your message here' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
