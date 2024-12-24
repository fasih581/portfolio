import React from 'react'

import Css from './TechStack.module.css'
import Img1 from '../../assets/techIcon/html.png'
import Img2 from '../../assets/techIcon/css.png'
import Img3 from '../../assets/techIcon/js.png'
import Img4 from '../../assets/techIcon/react.png'
import Img5 from '../../assets/techIcon/Redux.png'
import Img6 from '../../assets/techIcon/bootstrap.png'
import Img7 from '../../assets/techIcon/git.png'
import Img8 from '../../assets/techIcon/github.png'
import Img9 from '../../assets/techIcon/vscode.png'

function TechStack() {
    return (
        <div className={Css.Container}>
            <div className={Css.techStackTittle}>
                <h2>My Tech Stack</h2>
                <p> Technologies I’ve been working with recently</p>
            </div>
            <div className={Css.techStackIcon}>
                <div className={Css.Img}>
                    <img src={Img1} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img2} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img3} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img4} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img5} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img6} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img7} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img8} alt="" />
                </div>
                <div className={Css.Img}>
                    <img src={Img9} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TechStack