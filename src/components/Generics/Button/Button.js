import React from 'react'

function Button({type, link, text, icon}) {

    const buttonColor = () => {
        switch(type) {
            case 'black':
                return 'btn-black'
            case 'transparent':
                return 'btn-transparent'
            default :
                return 'btn-yellow'
        }
    }


  return (
    <>
        <a className={(buttonColor())} href={link}>{text} <i className={icon}></i></a>
    </>
  )
}

export default Button