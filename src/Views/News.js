import React from 'react'
import Header from '../components/Header/Header'
import ShowcaseSection from '../components/Generics/AllShowcaseSection/ShowcaseSection'
import Newsletter from '../components/NewsletterSection/Newsletter'
import Footer from '../components/Generics/Footer/Footer'
import NewsAndArticlesSection from '../components/NewsAndArticlesSection/NewsAndArticlesSection'
import SectionTitle from '../components/Generics/SectionTitle/SectionTitle'

const News = () => {
  return (
    <>
      <Header />
      <ShowcaseSection currentPage={"News"} headline={"Articles & News"}/>
      
      <NewsAndArticlesSection/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default News