import React from 'react'
import Button from '../Generics/Button/Button'
import OurServicesBox from './OurServicesBox'
import img_backgroundLinesOurServices from '../../assets/images/background-lines-our-services.svg'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'

const OurServices = () => {
  return (
    <section className="our-services">
            <img className="background-lines" src={img_backgroundLinesOurServices} alt=""/>
            <div className="container">
                <SectionTitle redTitle={"Our Services"} title={"We Provide The Best Service For Consulting"}/>
                <div className="text-blocks">
                    <OurServicesBox />
                </div>
                <div className="browse-services">
                    <Button type="transparent" text="Browse Services" link="/services/" icon="fa-regular fa-arrow-up-right" />
                </div>
                

            </div>
        </section>
  )
}

export default OurServices