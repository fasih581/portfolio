import React from 'react'
import NavBar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Project from '../../Projects/Projects'

import Css from './ProjectPage.module.css'

function ProjectPage() {
  return (
    <div>
      <div className={Css.Container}>
        <NavBar />
        <Project />
      </div>
      <Footer />
    </div>
  )
}

export default ProjectPage