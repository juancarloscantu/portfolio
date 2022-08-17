import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JCCANTU</a>


      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/juancarloscantu" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/jcantu86/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://twitter.com/jccantu1986" target="_blank" rel="noreferrer"><BsTwitter /></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Jc Cantu</small>
      </div>
    </footer>
  )
}

export default Footer