import React from 'react'
import img_partnersLogo_1 from '../../assets/images/Paperz.svg'
import img_partnersLogo_2 from '../../assets/images/Dorfus.svg'
import img_partnersLogo_3 from '../../assets/images/Martino.svg'
import img_partnersLogo_4 from '../../assets/images/Square.svg'
import img_partnersLogo_5 from '../../assets/images/Gobona.svg'

function PartnersLogo() {
  return (
    <section className="partners-logo">
        <div className="container">
            <img src={img_partnersLogo_1} alt="Partner logo"/>
            <img src={img_partnersLogo_2} alt="Partner logo"/>
            <img src={img_partnersLogo_3} alt="Partner logo"/>
            <img src={img_partnersLogo_4} alt="Partner logo"/>
            <img src={img_partnersLogo_5} alt="Partner logo"/>
        </div>
    </section>
  )
}

export default PartnersLogo