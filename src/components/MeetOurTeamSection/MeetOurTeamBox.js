import React from 'react'
import img_ourTeam_1 from '../../assets/images/our-team-1.png'
import img_ourTeam_2 from '../../assets/images/our-team-2.png'
import img_ourTeam_3 from '../../assets/images/our-team-3.png'
import img_ourTeam_4 from '../../assets/images/our-team-4.png'

const boxesList = [
    {id: 1, src: img_ourTeam_1, title: "Kristine Palmer", text: "Chief Operations Officer"},
    {id: 2, src: img_ourTeam_2, title: "Mark Aubri", text: "Senior Consultant"},
    {id: 3, src: img_ourTeam_3, title: "Kimberly Hansen", text: "Senior Consultant"},
    {id: 4, src: img_ourTeam_4, title: "Justin Willoman", text: "Senior Tech Consultant"},
]

const MeetOurTeamBox = () => {
  return (
    <>
        {boxesList.map((box) => (
            <div key={box.id} className='portraits-text-box'>
                <img src={box.src}/>
                <h3>{box.title}</h3>
                <p>{box.text}</p>
            </div>
        ))}
    </>
  )
}

export default MeetOurTeamBox