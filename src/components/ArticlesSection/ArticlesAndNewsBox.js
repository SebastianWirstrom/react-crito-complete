import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../../Contexts/ArticleContext'


const ArticlesAndNewsBox = () => {
  const { articles } = useArticles()

  const threeArticles = articles.slice(0,3)

  const formatDate = (dateString) => {
    const changeDate = {month:'short', day:'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, changeDate);
  }

  const clickOnArticle = () => {
    window.scrollTo(0,0)
  }

  return ( 
    <div className='articles-content'>
      <div className='articles-div'>
        {threeArticles.map((article) => (
          <Link key={article.id} onClick={clickOnArticle} to={`/news/${article.id}`} className='article'>
            <img src={article.imageUrl}/>
            <div className='date-box'>{formatDate(article.published)}</div>
            <h4>// {article.category}</h4>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </Link>
        ))}
      </div>
    </div>
  )   
}


export default ArticlesAndNewsBox