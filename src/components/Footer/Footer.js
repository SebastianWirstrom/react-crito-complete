import React from 'react'
import img_footerBackgroundLines from '../../assets/images/footer-background-lines.svg'
import SocialMediaBar from '../../components/Generics/SocialMediaBar/SocialMediaBar'
import img_logoFooter from '../../assets/images/Logo-footer.svg'
import FooterBox from './FooterBox'

const Footer = () => {
  return (
    <footer>
            <div className="container">
                <img className="background-lines" src={img_footerBackgroundLines} alt=""/>
                <div className="footer-content-logo">
                    <img src={img_logoFooter} alt="Crito logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.   </p>
                </div>   
                <FooterBox />   
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <SocialMediaBar />
            </div> 
        </footer>
  )
}

export default Footer