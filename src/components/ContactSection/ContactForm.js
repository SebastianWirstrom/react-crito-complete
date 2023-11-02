import React from 'react'
import Button from '../Generics/Button/Button'

const ContactForm = () => {

  
  return (
    <>
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
          <Button text="Send Message"  icon="fa-regular fa-arrow-up-right"/>
      </form>
    </>
  )
}

export default ContactForm