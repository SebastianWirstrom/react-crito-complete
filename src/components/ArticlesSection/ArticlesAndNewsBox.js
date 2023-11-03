import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ArticlesAndNewsBox = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    const data = await result.json()
    setArticles(data.slice(0,3))
  }

  

  const formatDate = (dateString) => {
    const changeDate = {month:'short', day:'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, changeDate);
  }
  
  

    return (
      
        <div className='articles-content'>
          <div className='articles-div'>
            {articles.map((article) => (
              <Link key={article.id} to={`/news/${article.id}`} className='article'>
                <img src={article.imageUrl} />
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