import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'

const NewsDetailsSection = () => {
    const [article, setArticle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== '') {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200) {
                setArticle(await result.json())
            }
        }
        
    }

  return (
    <div className='news-details'>
        <div className='container'>
            <SectionTitle title={article.title}/>
            <div className='article-section'>
                <div className='article'>
                    <div className='article-info'>
                        <div className='article-date'>{article.published}</div>
                        <div className='article-category'>{article.category}</div>
                        <div className='article-author'>{article.author}</div>
                    </div>    
                    <img src={article.imageUrl}/>
                    <div className='article-text'>
                        <p id='article-text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        <p id='article-text-1'>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                        <p id='article-text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                        <p id='article-text-1'>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                    </div>   
                </div>
                
                <form id="Search-bar" method="post">
                    <label className="search-bar-label" htmlFor="search-bar-input"></label>
                    <div className="search-bar-input-container">
                        <i class="fa-regular fa-magnifying-glass"></i>
                        <input className="search-bar-input" name="search-bar-input" type="text" placeholder=""/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsDetailsSection