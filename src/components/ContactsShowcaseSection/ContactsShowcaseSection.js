import React from 'react'
import img_showcaseLines from '../../assets/images/contacts-showcase-lines.svg'

const ContactsShowcaseSection = () => {
  return (
    <section className="contacts-showcase-main">
        <div className="container">
            <div className="contacts-background-lines">
                <img src={img_showcaseLines} alt=""/>
            </div>
            <div className="contacts-showcase">
                <div className="showcase-link">
                    <p>Home</p>
                    <p id="p-contacts">Contact</p>
                </div>
                <h2>Let's Connect</h2>
            </div>
        </div>
        
    </section>
  )
}

export default ContactsShowcaseSection