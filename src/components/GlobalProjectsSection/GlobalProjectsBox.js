import React from 'react'
import img_newspaperMan from '../../assets/images/article-img-newspaper.png'
import img_articleTech from '../../assets/images/article-img-tech.png'
import img_articleNotepad from '../../assets/images/article-img-notepad.png'
import img_articleComputer from '../../assets/images/article-img-computer.png'
import { Link } from 'react-router-dom'

const boxesList = [
    {id: 1, src: img_newspaperMan, title: "Grow your business", article: "/projects/grow-your-business/"},
    {id: 2, src: img_articleTech, title: "Why your client needs a responsive website", article: "/projects/why-your-clients-needs-a-responsive-website/"},
    {id: 3, src: img_articleNotepad, title: "Educate your employees to get better results", article: "/projects/educate-your-employees-to-get-better-results/"},
    {id: 4, src: img_articleComputer, title: "Business insights is an important piece of your business", article: "/projects/business-insights-is-an-important-piece-of-your-business/"}
]


const GlobalProjectsBox = () => {
  return (
    <>
    {boxesList.map((box) => (
        <div key={box.id} className='project'>
          <Link to={box.article} className='projects-link'>
            <img src={box.src}/>
            <h3>{box.title}</h3>
            <div className='readmore'>
                <p>Read More</p><i className="fa-regular fa-arrow-up-right"></i> 
            </div>
          </Link>
        </div>
    ))}
    </>
  )
}

export default GlobalProjectsBox