import React from 'react'
import SectionTitle from '../components/Generics/SectionTitle/SectionTitle'
import Button from '../components/Generics/Button/Button'
import img_notFoundimage from '../assets/images/notFoundImage.jpg'
import img_critoLogo from '../assets/images/Logo.svg'

const NotFound = () => {
  return (
    <>
      <div className='not-found'>
        <div className='container'>
          <img src={img_critoLogo} className='crito-logo'/>
          <SectionTitle title="404 - Page not found"/>
          <img src={img_notFoundimage} className='not-found-img' alt='Image of computer screen show error 404'/>
          <Button text="Go back to home" icon="fa-regular fa-arrow-up-right" link={"/"}/>
        </div>
      </div>
    </>
  )
}

export default NotFound