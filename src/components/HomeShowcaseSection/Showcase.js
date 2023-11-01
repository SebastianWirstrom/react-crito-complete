import React from 'react'
import img_backgroundLines from '../../assets/images/background-lines.svg'
import img_showcaseManTablet from '../../assets/images/showcase-man-tablet.png'
import Button from '../Generics/Button/Button.js'

function Showcase() {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button text="Get Consulting" link="/consulting/" icon="fa-regular fa-arrow-up-right"/>
                <Button type="transparent" text="Learn More" link="/learn-more/" icon="fa-regular fa-arrow-up-right"/>
            </div>
            <img src={img_showcaseManTablet} alt="image of a man in a suit holding a tablet"/>
        </div>
    </section>
  )
}

export default Showcase