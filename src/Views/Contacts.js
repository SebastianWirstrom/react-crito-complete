import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactsShowcaseSection from '../components/ContactsShowcaseSection/ContactsShowcaseSection'
import ContactSection from '../components/ContactSection/ContactSection'
import ContactMapSection from '../components/ContactMapSection/ContactMapSection'

const Contacts = () => {
  return (
    <>
      <Header />
      <ContactsShowcaseSection />
      <ContactSection />
      <ContactMapSection />
      <Footer />

    </>
  )
}

export default Contacts