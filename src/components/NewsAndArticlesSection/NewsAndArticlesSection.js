import React, { useEffect, useState } from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'

const NewsAndArticlesSection = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    setArticles(await result.json())
  }

  return (
    <div className='news-and-articles'>    
      <div className='container'>
        <SectionTitle title={'Our News & Articles'}/>
        <div className='articles'>
          {articles.map(article => (
            <div key={article.id} className='article'>
              <img src={article.imageUrl}/>
              <h4>{article.category}</h4>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsAndArticlesSection