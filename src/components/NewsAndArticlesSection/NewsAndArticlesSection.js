import { useArticles } from '../../Contexts/ArticleContext'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'

const NewsAndArticlesSection = () => {

  const { articles } = useArticles()

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
              <div className="article-content">
                <div className='date-box'>{formatDate(article.published)}</div>
                <h4>// {article.category}</h4>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsAndArticlesSection