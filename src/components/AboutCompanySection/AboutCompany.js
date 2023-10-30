import React from 'react'
import img_womanWalking from '../../assets/images/woman-walking.png'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import Button from '../Generics/Button/Button'

const AboutCompany = () => {
  return (
    <section class="about">
        <div class="container">
            <div class="picture-section">
                <img class="img-founder" src={img_womanWalking} alt="Woman walking with computer"/>
                <div class="blue-box">
                    <div class="blue-box-text">
                        <h3>Samantha Brown,</h3><p>Founder</p>
                    </div>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>          
            </div>
                <div class="section-text">
                    <SectionTitle redTitle={"About Company"} title={"We Are Business Consulting & Credit Repair Experts"}/>
                    <p id="p-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p id="p-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div class="buttons">
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