import React from 'react'
import './contact.css'

// import {HiOutlineMail} from 'react-icons/hi'
// import {FaFacebookMessenger} from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xjx0im', 'template_wpsg5vv', form.current, '42ru7uxjBTvbVlkVG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        {/* <div className="contact__options">
          <article className="contact__option">
              <HiOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>jc@jccantu.com</h5>
              <a href="mailto:jc@jccantu.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
              <FaFacebookMessenger className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>JC Cantu</h5>
              <a href="https://m.me/iamthejcc" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div> */}
        {/* END OF SIDE CONTACTS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email'  required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact