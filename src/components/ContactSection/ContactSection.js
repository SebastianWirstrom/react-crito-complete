import React from 'react'
import ContactForm from './ContactForm'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import ContactInfoBox from './ContactInfoBox'

const ContactSection = () => {
  return (
    <section className="contact-section">
        <div className="container">
            <div className="contact-information">
                <ContactInfoBox />
            </div>
            <div className="contact-form-main">
                <div className="contact-form">
                    <SectionTitle title="Leave us a message for any information."/>
                    <ContactForm />
                </div>
            </div>    
        </div>
    </section>
  )
}

export default ContactSection