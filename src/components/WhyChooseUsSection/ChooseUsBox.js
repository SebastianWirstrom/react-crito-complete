import React from 'react'
import img_chooseUsThumbsUp from '../../assets/images/Choose-us-thumbs-up.svg'
import img_chooseUsDiamond from '../../assets/images/Choose-us-diamond.svg'
import img_chooseUsPen from '../../assets/images/Choose-us-pen.svg'
import img_chooseUsHead from '../../assets/images/Choose-us-head.svg'

const boxesList = [
    {id: 1, src: img_chooseUsThumbsUp, title: "Process Excellence", text: "Lorem ipsum, dolor sit amet consectetur."},
    {id: 2, src: img_chooseUsDiamond, title: "Strategic Planning", text: "Lorem ipsum, dolor sit amet consectetur."},
    {id: 3, src: img_chooseUsPen, title: "Experience Design", text: "Lorem ipsum, dolor sit amet consectetur."},
    {id: 4, src: img_chooseUsHead, title: "Artificial Intellegence", text: "Lorem ipsum, dolor sit amet consectetur."}
]


const ChooseUsBox = () => {
  return (
    <>
        {boxesList.map((box) => (
            <div key={box.id} className='choose-section-text-1'>
                <img src={box.src}/>
                <div className='choose-grid'>
                    <h3>{box.title}</h3>
                    <p>{box.text}</p>
                </div>
            </div>

        ))} 
    </>
  )
}

export default ChooseUsBox