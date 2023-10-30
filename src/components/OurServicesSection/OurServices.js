import React from 'react'

const OurServices = () => {
  return (
    <section class="our-services">
            <img class="background-lines" src="images/background-lines-our-services.svg" alt=""/>
            <div class="container">
                <div class="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div class="text-blocks" >
                    <a class="block" href="#">
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-button" href="#"><i class="fa-light fa-arrow-right"></i></div>
                    </a>   
                    <a class="block" href="#">
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-button" href="#"><i class="fa-light fa-arrow-right"></i></div>
                    </a>
                    <a class="block" href="#">
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-button" href="#"><i class="fa-light fa-arrow-right"></i></div>
                    </a>
                    <a class="block" href="#">
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-button" href="#"><i class="fa-light fa-arrow-right"></i></div>
                    </a>
                </div>
                <div class="browse-services">
                    <a class="btn-transparent" href="services.html">Browse Services <i class="fa-regular fa-arrow-up-right"></i></a>
                </div>
                

            </div>
        </section>
  )
}

export default OurServices