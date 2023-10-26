import React from 'react'
import img_handshakeIcon from '../../assets/images/Icon-handshake.svg'
import img_ideaIcon from '../../assets/images/Icon-idea.svg'
import img_statsIcon from '../../assets/images/Icon-stats.svg'
import img_cogBoxIcon from '../../assets/images/Icon-cog-box.svg'

  const boxesList = [
    {id: 1, src: img_handshakeIcon, title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {id: 2, src: img_ideaIcon, title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {id: 3, src: img_statsIcon, title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {id: 4, src: img_cogBoxIcon, title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  ]

function FeaturesBox() {
    return (
      <div className='feat-box'>
        
        {boxesList.map((box) => (
          <div key={box.id}>
            <img key={box.id} src={box.src}/>
            <h3>{box.title}</h3>
            <p>{box.text}</p>
          </div>
        ))}    

      </div>
    )
      
}

export default FeaturesBox;