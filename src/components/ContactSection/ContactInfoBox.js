import React from 'react'

const ContactInfoBox = () => {

    const boxesList = [
        {id: 1, icon: 'fa-solid fa-location-dot', title: 'Visit us', textOne: 'Sveavägen 31', textTwo: '111 34 STOCKHOLM'}, 
        {id: 2, icon: 'fa-solid fa-phone', title: 'Call us', textOne: '+46 (8) 121 470 50', textTwo: '+46 (8) 121 470 51'}, 
        {id: 3, icon: 'fa-regular fa-envelope', title: 'Email us', textOne: 'info@crito.com', textTwo: 'support@crito.com'}, 
    ]
    
  return (
    <>
        {boxesList.map((box) => (
            <div key={box.id} className='contact-information-box'>
                <i className={box.icon} style={{color: "#ffffff"}}></i>
                <div className='contact-information-box-text'>
                    <h3>{box.title}</h3>
                    <p>{box.textOne}</p>
                    <p>{box.textTwo}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default ContactInfoBox