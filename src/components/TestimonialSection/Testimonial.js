import React from 'react'
import TestimonialBox from './TestimonialBox'
import Button from '../Generics/Button/Button'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'

const Testimonial = () => {
  return (   
    <section className="testimonial-section">
        <div className="container">
            <SectionTitle redTitle={"Testimonial"} title={"What Our Clients Say"}/>
            <div className="testimonial-contents">    
                <TestimonialBox />   
            </div>
            <div className="button">
                <Button type="black" text="All Reviews" icon="fa-regular fa-arrow-up-right" link="/reviews/"/>
            </div> 
        </div>    
    </section>
  )
}

export default Testimonial