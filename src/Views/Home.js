import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/ShowcaseSection/Showcase'
import PartnersLogo from '../components/PartnersLogoSection/PartnersLogo'
import Features from '../components/FeaturesSection/Features'

const Home = () => {
  return (
    <>
      <Header />
      <Showcase /> 
      <PartnersLogo />
      <Features />   
      </>
  )
}

export default Home