import React from 'react'
import NavBar from '../../Navbar/Navbar'
import Home from '../../Home/Home'
import TechStack from '../../TechStack/TechStack'
import Projects from '../../Projects/Projects'
import Footer from '../../Footer/Footer'

import Css from './MainPage.module.css'

function MainPage() {
  return (
    <div>
      <div className={Css.mainContainer}>
        <NavBar />
        <Home />
        <TechStack />
        <Projects />
      </div>
        <Footer />
    </div>
  )
}

export default MainPage