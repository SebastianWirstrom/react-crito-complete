import React from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import GlobalProjectsBox from './GlobalProjectsBox'
import Button from '../Generics/Button/Button'

const GlobalProjects = () => {
  return (
    <section className="gobal-projects">
            <div className="container">
                <SectionTitle redTitle={"Project & Case Studies"} title={"Let's Look At Our Global Projects"} />
                <div className="project-and-cases">
                    <GlobalProjectsBox />
                </div>
                <div className="center-button">
                    <Button type="black" text="All Recent Projects " icon="fa-regular fa-arrow-up-right" link="/projects/"/>
                </div>
            </div>
        </section>
  )
}

export default GlobalProjects