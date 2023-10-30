import React from 'react'
import SectionTitle from '../Generics/SectionTitle/SectionTitle'
import GlobalProjectsBox from './GlobalProjectsBox'

const GlobalProjects = () => {
  return (
    <section class="gobal-projects">
            <div class="container">
                <SectionTitle redTitle={"Project & Case Studies"} title={"Let's Look At Our Global Projects"} />
                <div class="project-and-cases">
                    <GlobalProjectsBox />
                </div>
                <div class="center-button">
                    <a class="btn-black" href="projects.html">All Recent Projects <i class="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
  )
}

export default GlobalProjects