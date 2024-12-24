import React from 'react'

import Img from '../../assets/profile.jpg'
import resume from '../../assets/resume.pdf'

import Css from './Home.module.css'

function Home() {
  return (
    <div className={Css.Container}>
      <div className={Css.Img}>
        <img src={Img} alt="" />
      </div>
      <div className={Css.Box}>
        <h2>MUHAMMED FASIH EK</h2>
        <h5>Full Stack Developer & Ui Ux Designer</h5>
        <p>As a highly motivated and results-oriented React JavaScript Full Stack Developer with
          a strong interest in UI/UX design, I possess excellent problem-solving, communication,
          teamwork skills. I am eager to contribute to your projects and continuously learn and
          grow within a dynamic environment.</p>
        <a href={resume} download={resume} className={Css.boxBtn}>Download CV</a>
      </div>
    </div>
  )
}

export default Home