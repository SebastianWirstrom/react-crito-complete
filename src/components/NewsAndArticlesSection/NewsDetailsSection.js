import React, { useEffect } from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import RecentPostsBox from './RecentPostsBox'
import CategoriesBox from './CategoriesBox'
import { useArticles } from '../../Contexts/ArticleContext'
import { useParams } from 'react-router-dom'

const NewsDetailsSection = () => {
    
    const { article, getArticle } = useArticles()
    const {id} = useParams()

    useEffect(() => {
        getArticle(id)
    }, [id, getArticle])

    const formatDate = (dateString) => {
        const changeDate = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, changeDate)
    }

    return (
    <div className='news-details'>
        <div className='container'>
            <div className='article-section'>
                <SectionTitle title={article.title}/>
                <div className='article'>
                    <div className='article-info'>
                        <div className='article-date'>{formatDate(article.published)}</div>
                        <i className="fa-solid fa-circle"></i>
                        <div className='article-category'>{article.category}</div>
                        <i className="fa-solid fa-circle"></i>
                        <div className='article-author'>{article.author}</div>
                    </div>    
                    <img src={article.imageUrl}/>
                    <div className='article-text'>
                        <p id='article-text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        <p id='article-text-1'>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                        <p id='article-text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                        <p id='article-text-1'>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                        <p id='p-quote'><i className="fa-sharp fa-solid fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<i className="fa-sharp fa-solid fa-quote-right"></i></p>
                        <p id='article-text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>   
                </div> 
            </div>
            <div className='right-column'>
                <form id="Search-bar" method="post">
                    <label className="search-bar-label" htmlFor="search-bar-input"></label>
                    <div className="search-bar-input-container">
                        <i className="fa-regular fa-magnifying-glass"></i>
                        <input className="search-bar-input" name="search-bar-input" id="search-bar-input" type="text" placeholder="Type to search..."/>
                    </div>
                </form>
                <div className="recent-posts">
                    <h3 className="title-box">Senaste artiklar</h3>
                    <RecentPostsBox />
                </div>
                <div className="categories">
                    <h3 className="title-box">Kategorier</h3>
                    <CategoriesBox />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetailsSection