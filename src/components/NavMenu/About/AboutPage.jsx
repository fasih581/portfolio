import React from 'react'

import NavBar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

import Css from './AboutPage.module.css'

function AboutPage() {
  return (
    <>
      <div className={Css.Container}>
        <NavBar />
        <div className={Css.AboutTittle}>
          <h2>About</h2>
          <p>I'm MUHAMMED FASIH E K, an enthusiastic and highly motivated individual with a strong 
            interest in becoming a React JavaScript Full Stack Developer. I possess a strong foundation 
            in JavaScript, HTML, CSS, React, Node.js, databases and a keen interest in UI/UX design principles. 
            I am eager to contribute to your projects with my determination, quick learning abilities, and effective 
            communication skills. I am dedicated to continuous learning, professional growth, and adding significant 
            value to your organization. I am a fast learner, a strong problem-solver, and I am eager to contribute to
             a dynamic and challenging work environment.</p>
        </div>
        <div className={Css.EduExpTittle}>
          <h2>Education</h2>
          <div className={Css.EduExpBox}>
            <h5>COMPUTER SCIENCE</h5>
            <div className={Css.EduExpDisBox}>
              <div className={Css.EduExpDis}>
                <p>MIM HSS Higher Secondary School</p>
                <p>PERODE, KOZHIKKODE</p>
              </div>
              <p>2020 - 2022</p>
            </div>
          </div>
        </div>
        <div className={Css.EduExpTittle}>
          <h2>Work Experience</h2>
          <div className={Css.EduExpBox}>
            <h5>Full stack developer</h5>
            <div className={Css.EduExpDisBox}>
              <div className={Css.EduExpDis}>
                <p>StackupLeaninghub</p>
                <p>Thiruvananthapuram</p>
              </div>
              <p>June 2023 - May 2024</p>
            </div>
          </div>
          <div className={Css.EduExpBox}>
            <h5>Junior Web Developer Intern</h5>
            <div className={Css.EduExpDisBox}>
              <div className={Css.EduExpDis}>
                <p>Digiplex</p>
                <p>Bahrain</p>
              </div>
              <p>Aug 2024 - Nov 2024</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage