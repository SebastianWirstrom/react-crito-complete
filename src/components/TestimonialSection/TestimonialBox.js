import React from 'react'
import img_reviewStar from '../../assets/images/testimonial-star.svg'
import img_review_1 from '../../assets/images/review-1.png'
import img_review_2 from '../../assets/images/review-2.png'
import img_review_3 from '../../assets/images/review-3.png'

const boxesList = [
    {id: 1, src: img_review_1, icon: img_reviewStar, title: "Cassandra Warren", text: "Business Manager, Dorfus"},
    {id: 2, src: img_review_2, icon: img_reviewStar, title: "Cassandra Warren", text: "Business Manager, Dorfus"},
    {id: 3, src: img_review_3, icon: img_reviewStar, title: "Cassandra Warren", text: "Business Manager, Dorfus"},
]

const TestimonialBox = () => {
  return (
    <>
        {boxesList.map((box) => (
            <div key={box.id} className='review'>
                {[...Array(5)].map((_, index) => (
                        <img key={index} src={img_reviewStar} alt="Star" style={{marginLeft: '5px'}} />
                    ))}
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className='review-person'>
                    <img src={box.src}/>
                    <div className='review-person-text'>
                        <h3>{box.title}</h3>
                        <p>{box.text}</p>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default TestimonialBox