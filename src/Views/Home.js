import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/ShowcaseSection/Showcase'
import PartnersLogo from '../components/PartnersLogoSection/PartnersLogo'
import Features from '../components/FeaturesSection/Features'
import AboutCompany from '../components/AboutCompanySection/AboutCompany'
import OurServices from '../components/OurServicesSection/OurServices'
import WhyChooseUs from '../components/WhyChooseUsSection/WhyChooseUs'
import GlobalProjects from '../components/GlobalProjectsSection/GlobalProjects'
import MeetOurTeam from '../components/MeetOurTeamSection/MeetOurTeam'
import Testimonial from '../components/TestimonialSection/Testimonial'
import ArticlesAndNews from '../components/ArticlesSection/ArticlesAndNews'
import Newsletter from '../components/NewsletterSection/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Showcase /> 
      <PartnersLogo />
      <Features /> 
      <AboutCompany />  
      <OurServices />
      <WhyChooseUs />
      <GlobalProjects />
      <MeetOurTeam />
      <Testimonial />
      <ArticlesAndNews />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home