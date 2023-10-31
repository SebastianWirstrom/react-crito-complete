import React from 'react'
import img_backgroundLinesNL from '../../assets/images/background-lines-right.svg'
import Button from '../Generics/Button/Button'

const Newsletter = () => {
  return (
    <section class="newsletter">
        <img class="background-lines-right" src={img_backgroundLinesNL} alt=""/>
        <div class="container">
            <h2>Get News Updates By Signup</h2>
            <form id="Newsletter-form" method="post">
                <label class="form-label" for="email"></label>
                <input class="form-input" type="email" id="email" name="email" title="Epostadress" placeholder="username@domain.com" />
                <Button text="Subscribe " icon="fa-regular fa-arrow-up-right"/>
            </form>
        </div>
    </section>
  )
}

export default Newsletter