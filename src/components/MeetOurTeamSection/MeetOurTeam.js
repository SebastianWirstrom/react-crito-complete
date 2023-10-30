import React from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import Button from '../Generics/Button/Button'
import MeetOurTeamBox from './MeetOurTeamBox'

const MeetOurTeam = () => {
  return (
    <section className="our-team">
            <div className="container">
                <div className="title">
                    <SectionTitle redTitle={"Meet Our Team"} title={"Experienced Team Members"}/>
                    <div className="button">
                        <Button text="Browse Team" icon="fa-regular fa-arrow-up-right"/>
                    </div>              
                </div>
                <div className="portraits">
                    <MeetOurTeamBox />
                </div>
            </div>
        </section>
  )
}

export default MeetOurTeam