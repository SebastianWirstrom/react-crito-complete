import React from 'react'
import { Link } from 'react-router-dom'

const boxesList = [
    {id: 1, title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", link: "/business-advice"},
    {id: 2, title: "Startup Business", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", link: "/startup-business"},
    {id: 3, title: "Financial Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", link: "/financial-advice"},
    {id: 4, title: "Risk Management", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", link: "/risk-management"},
]

const OurServicesBox = () => {

    
  return (
    <>
      {boxesList.map((box) => (
        <div key={box.id} className='block'>
            <h3>{box.title}</h3>
            <p>{box.text}</p>
            <Link to={box.link} className="arrow-button"><i className="fa-light fa-arrow-right"></i></Link>
        </div>
      ))}  
    </>
  )
}

export default OurServicesBox