import React from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import Button from '../Generics/Button/Button'
import ArticlesAndNewsBox from './ArticlesAndNewsBox'

const ArticlesAndNews = () => {
  return (
    <section className="article-section">
        <div className="container">             
            <div className="title">
                <SectionTitle redTitle={"Articles & News"} title={"Get Every Single Article & News"}/>
                <div className="button">
                    <Button type="transparent" text="Browse Articles" icon="fa-regular fa-arrow-up-right" link ="/news/"/>
                </div>
            </div>
            <div className="articles-content">
                <ArticlesAndNewsBox/>
            </div>
        </div>
    </section>
  )
}

export default ArticlesAndNews