import React from 'react'
import FeaturesBox from './FeaturesBox'

function Features() {

    

    return (
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <h2><p id="p-features">Features</p>Our accounting is trusted by thousands of companies</h2>                   
                    <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                
                <div className="feature-content">  
                    <FeaturesBox /> 
                </div>                                                
            </div>
            
        </section>
    )
}

export default Features