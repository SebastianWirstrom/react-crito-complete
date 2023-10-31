import React from 'react'
import img_articles_1 from '../../assets/images/articles-1.png'
import img_articles_2 from '../../assets/images/articles-2.png'
import img_articles_3 from '../../assets/images/articles-3.png'

const boxesList = [
  {id: 1, day: "25", month: "Mar", src: img_articles_1, category: "Business", title: "How to use digitalization in the classroom", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
  {id: 2, day: "17", month: "Mar", src: img_articles_2, category: "Business", title: "How to implement Chat GPT in your projects", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
  {id: 3, day: "13", month: "Mar", src: img_articles_3, category: "Business", title: "The guide to support modern CSS design", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
]

const ArticlesAndNewsBox = () => {
  return (
    <>
      {boxesList.map((box) => (
        <div key={box.id} className='articles-div'>
          <div className='date-box'>
            <h3>{box.day}</h3>
            <p>{box.month}</p>
          </div>
          <img src={box.src}/>
          <p id='p-business'>{box.category}</p>
          <h3>{box.title}</h3>
          <p>{box.text}</p>
        </div>
      ))}
    </>
  )
}

export default ArticlesAndNewsBox