import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RecentPostsBox = () => {

    const [articles, setArticles] = useState([])  

    useEffect(() => {  
      getArticles()
    }, [])
  
    const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      const data = await result.json()
      setArticles(data.slice(0,4))
    }

    const formatDate = (dateString) => {
      const changeDate = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, changeDate);
    }

  return (
    <div className='posts'>
        {articles.map(article => (
            <Link key={article.id} to={`/news/${article.id}`} className='post'>           
              <h4>{article.title}</h4>
              <li class="list-item">{formatDate(article.published)}</li>
            </Link>
          ))}   
    </div>
  )
}

export default RecentPostsBox