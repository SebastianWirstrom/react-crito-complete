import React, { useEffect, useState } from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'

const NewsAndArticlesSection = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    const data = await result.json()
    setArticles(data.slice(0,9))
  }

  const formatDate = (dateString) => {
    const changeDate = {month:'short', day:'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, changeDate);
  }

  return (
    <div className='news-and-articles'>    
      <div className='container'>
        <SectionTitle title={'Our News & Articles'}/>
        <div className='articles'>
          {articles.map(article => (
            <Link key={article.id} to={`/news/${article.id}`} className='article'>
              <img src={article.imageUrl}/>
              <div className='date-box'>{formatDate(article.published)}</div>
              <h4>// {article.category}</h4>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsAndArticlesSection