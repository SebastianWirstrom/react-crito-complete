import React from 'react'
import Header from '../components/Header/Header'
import ShowcaseSection from '../components/Generics/AllShowcaseSection/ShowcaseSection'
import Newsletter from '../components/NewsletterSection/Newsletter'
import Footer from '../components/Generics/Footer/Footer'

const News = () => {
  return (
    <>
      <Header />
      <ShowcaseSection currentPage={"News"} headline={"Articles & News"}/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default News