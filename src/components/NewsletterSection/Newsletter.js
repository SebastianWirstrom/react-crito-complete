import React from 'react'
import img_backgroundLinesNL from '../../assets/images/background-lines-right.svg'
import Button from '../Generics/Button/Button'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-lines-right" src={img_backgroundLinesNL} alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form id="newsletter-form" method="post">
                <label className="form-label" htmlFor="email"></label>
                <input className="form-input" type="email" id="email" name="email" title="Epostadress" placeholder="username@domain.com" />
                <Button text="Subscribe " icon="fa-regular fa-arrow-up-right"/>
            </form>
        </div>
    </section>
  )
}

export default Newsletter