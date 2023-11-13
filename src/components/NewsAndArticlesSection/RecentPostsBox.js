import { useArticles } from '../../Contexts/ArticleContext'
import { Link } from 'react-router-dom'

const RecentPostsBox = () => {

  const { articles } = useArticles()

  const recentArticles = articles.slice(0,4)

  const formatDate = (dateString) => {
    const changeDate = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, changeDate);
  }

  return (
    <div className='posts'>
        {recentArticles.map(article => (
            <Link key={article.id} to={`/news/${article.id}`} className='post'>           
              <h4>{article.title}</h4>
              <li className="list-item">{formatDate(article.published)}</li>
            </Link>
          ))}   
    </div>
  )
}

export default RecentPostsBox