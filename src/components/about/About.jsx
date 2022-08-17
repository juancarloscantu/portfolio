import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaInternetExplorer} from 'react-icons/fa'
import {BsFillPhoneFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FaInternetExplorer className='about__icon'/>
              <h5>Websites</h5>
              <small>Created for companies</small>
            </article>
            <article className='about__card'>
              <BsFillPhoneFill className='about__icon'/>
              <h5>iOS</h5>
              <small>Learning SwiftUI</small>
            </article>
          </div>

          <p>I am looking for opportunities in the Houston area. I am learning Swift to make mobile apps and React. I also have graphic design and video editing experience. I have a degree
            in Web Applications.
          </p>

          <a href="#portfolio" className='btn btn-primary'>Portfolio</a>
        </div>
      </div>
    </section>
  )
}

export default About