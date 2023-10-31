import React from 'react'

const ContactSection = () => {
  return (
    <section className="contact-section">
        <div className="container">
            <div className="contact-information">
                <div className="contact-information-box">
                    <i className="fa-solid fa-location-dot" style={{color: "#ffffff"}}></i>
                    <div className="contact-information-box-text">
                        <h3>Visit us</h3>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="contact-information-box">
                    <i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i>
                    <div className="contact-information-box-text">
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="contact-information-box">
                    <i className="fa-regular fa-envelope" style={{color: "#ffffff"}}></i>
                    <div className="contact-information-box-text">
                        <h3>Email us</h3>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-form-main">
                <div className="contact-form">
                    <div className="section-title">
                        <h2>Leave us a message for any information.</h2>
                    </div>
                    <form id="contact-form" method="post">
                        <div className="form-row">
                            <label className="form-label" htmlFor="name"></label>
                            <input className="form-input" type="text" id="name" name="name" title="name" placeholder="Name*" tabIndex="1"></input>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="email"></label>
                            <input className="form-input" type="email" id="email" name="email" title="Epostadress" placeholder="Email*" tabIndex="2"></input>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="biography"></label>
                            <textarea className="form-input" id="biography" name="biography" placeholder="Your Message*" tabIndex="3"></textarea>
                        </div>
                    </form>
                    <div className="contact-button">
                        <a className="btn-yellow" href="contacts.html" tabIndex="4" >Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default ContactSection