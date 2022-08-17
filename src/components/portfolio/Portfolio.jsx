import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/aauhub.png'
import IMG2 from '../../assets/dht.png'
import IMG3 from '../../assets/pm.png'
import IMG4 from '../../assets/vr.png'
import IMG5 from '../../assets/kawaii-burger.png'
import IMG6 from '../../assets/kitmoji.png'
import IMG7 from '../../assets/pandaji.png'


const data = [
{
  id: 1,
  image: IMG1,
  title: 'All About You',
  github: 'https://github.com',
  demo: 'https://aauhub.com'
},

{
  id: 2,
  image: IMG2,
  title: 'Downhole Threading',
  github: 'https://github.com',
  demo: 'https://jccantu.com/dht'
},

{
  id: 3,
  image: IMG3,
  title: 'Perpectual Machine',
  github: 'https://github.com',
  demo: 'https://perma.io'
},

{
  id: 4,
  image: IMG4,
  title: 'Virtual Reality',
  github: 'https://github.com',
  demo: 'https://jccantu.com/vr'
},

{
  id: 5,
  image: IMG5,
  title: 'Kawaii Burgers',
  github: 'https://github.com',
  demo: 'https://jccantu.com'
},

{
  id: 6,
  image: IMG6,
  title: 'Kitmoji',
  github: 'https://github.com',
  demo: 'https://jccantu.com'
},

{
  id: 7,
  image: IMG7,
  title: 'Pandaji',
  github: 'https://github.com',
  demo: 'https://jccantu.com'
},
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        </article>)
        }) 
       }
      </div>
    </section>
  )
}

export default Portfolio