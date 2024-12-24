import React from 'react'


import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import Css from './Footer.module.css'

function Footer() {
    return (
        <div>
            <div className={Css.Container}>
                <div className={Css.footerBox}>
                    <h1>Let’s<span>Work Together -</span></h1>
                    <h5><span><SiGmail /></span>fasihedakkudi@gmail.com</h5>
                </div>
            </div>
            <div className={Css.footerLine}></div>
            <div className={Css.Container}>
                <div className={Css.footerBoxBottom}>
                    <div className={Css.footerIconBottom}>
                        <a href="https://github.com/fasih581" target="_blank" rel="noopener noreferrer" className={Css.Icon}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/fasihek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className={Css.Icon}>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/fasih_ek/profilecard/?igsh=cHc1YjVvcmViaW93" target="_blank" rel="noopener noreferrer" className={Css.Icon}>
                            <FaInstagramSquare />
                        </a>
                    </div>
                    <h6>Thank you for visiting! This site was created by me to showcase my work,
                        skills, and passion for web development and UI/UX design. Feel free to
                        explore and connect with me!</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer