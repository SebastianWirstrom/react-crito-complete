import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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

  return (
    <div className='posts'>
        {articles.map(article => (
            <Link key={article.id} to={`/news/${article.id}`} className='post'>           
              <h4>{article.title}</h4>
              <p>{article.published}</p>
            </Link>
          ))}   
    </div>
  )
}

export default RecentPostsBox