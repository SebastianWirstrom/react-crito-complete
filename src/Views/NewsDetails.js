import React from 'react'
import NewsDetailsSection from '../components/NewsAndArticlesSection/NewsDetailsSection'
import Header from '../components/Header/Header'
import ShowcaseSection from '../components/Generics/AllShowcaseSection/ShowcaseSection'
import Footer from '../components/Generics/Footer/Footer'
import ArticlesAndNews from '../components/ArticlesSection/ArticlesAndNews'


const NewsDetails = () => {
  return (
    <>
    <Header/>
    <ShowcaseSection currentPage={"News"} headline={"News & Articles"} />
    <NewsDetailsSection/>
    <ArticlesAndNews style={{backgroundColor: '#F0EFE9'}}/>
    <Footer/>
    </>
  )
}

export default NewsDetails