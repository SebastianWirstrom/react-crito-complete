import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Generics/Footer/Footer'
import ShowcaseSection from '../components/Generics/AllShowcaseSection/ShowcaseSection'
import ContactSection from '../components/ContactSection/ContactSection'
import ContactMapSection from '../components/ContactMapSection/ContactMapSection'

const Contacts = () => {
  return (
    <>
      <Header />
      <ShowcaseSection currentPage={"Contact"} headline={"Let's Connect"}/>
      <ContactSection />
      <ContactMapSection />
      <Footer />

    </>
  )
}

export default Contacts