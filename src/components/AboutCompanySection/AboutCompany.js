import React from 'react'
import img_womanWalking from '../../assets/images/woman-walking.png'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import Button from '../Generics/Button/Button'

const AboutCompany = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="picture-section">
                <img className="img-founder" src={img_womanWalking} alt="Woman walking with computer"/>
                <div className="blue-box">
                    <div className="blue-box-text">
                        <h3>Samantha Brown,</h3><p>Founder</p>
                    </div>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>          
            </div>
                <div className="section-text">
                    <SectionTitle redTitle={"About Company"} title={"We Are Business Consulting & Credit Repair Experts"}/>
                    <p id="p-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p id="p-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="buttons">
                    <Button type="black" link={"/about-company"} text={"Learn More"} icon={"fa-regular fa-arrow-up-right"}/>
                    <Button type="transparent" link={"/services/intro-video"} icon={"fa-sharp fa-solid fa-play"}/>
                    <p id="p-intro-video">Intro Video</p>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default AboutCompany