import React from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import ChooseUsBox from './ChooseUsBox'
import img_twoWomenTalking from '../../assets/images/two-women-talking.png'
import img_backgroundBox from '../../assets/images/Choose-us-background-box.svg'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="choose-us-text">
                <SectionTitle redTitle={"Why Choose Us"} title={"Why We Are The Best Business Consulting Agency"}/>
                <div className="choose-section-1">
                    <ChooseUsBox/>                     
                </div>
            </div>
            <div className="choose-section-img">               
                <img src={img_twoWomenTalking} alt="two women talking about business"/>
                <div className="choose-us-background-box">
                    <img src={img_backgroundBox}/>
                </div>     
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs