import React from 'react'
import FeaturesBox from './FeaturesBox'
import Button from '../Generics/Button/Button'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'


function Features() {

    

    return (
        <section className="features">
            <div className="container">
                <div className="title-and-button">
                    <SectionTitle redTitle={"Features"} title={"Our Accounting is Trusted by Thousands of Companies"}/>                  
                    <Button link={"/consulting/"} text={"Get Consulting" } icon={"fa-regular fa-arrow-up-right"} />
                </div>   
                <div className="feature-content">  
                    <FeaturesBox /> 
                </div>                                                
            </div>
            
        </section>
    )
}

export default Features