import React from 'react'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';

import Css from './Navbar.module.css'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = React.useState(false);

    const homeNev = () => {
        navigate('/');
    };

    const aboutNev = () => {
        navigate('/About');
    };

    const projectNev = () => {
        navigate('/Project');
    };


    const contactNev = () => {
        navigate('/Contact');
    };

    return (
        <div className={Css.Container}>
            <h3>PORTFOLIO</h3>
            <ul>
                <li onClick={homeNev} className={location.pathname === '/' ? Css.pathNavLi : Css.navLI}>Home</li>
                <li onClick={aboutNev} className={location.pathname === '/About' ? Css.pathNavLi : Css.navLI}>About</li>
                <li onClick={projectNev} className={location.pathname === '/Project' ? Css.pathNavLi : Css.navLI}>Projects</li>
                <li onClick={contactNev} className={location.pathname === '/Contact' ? Css.pathNavLi : Css.navLI}>Contact</li>
            </ul>
            <div className={Css.Box}>
                <div className={Css.BoxIcon}>
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
            </div>
            <div className={Css.drawerContainer}>
                <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}><RiMenu3Line /></Button>
                <Drawer open={open} onClose={() => setOpen(false)} anchor="right" className={Css.drawerBox}>
                    <ModalClose />
                    <ul>
                        <li onClick={homeNev} className={location.pathname === '/' ? Css.pathNavLi : Css.navLI}>Home</li>
                        <li onClick={aboutNev} className={location.pathname === '/About' ? Css.pathNavLi : Css.navLI}>About</li>
                        <li onClick={projectNev} className={location.pathname === '/Project' ? Css.pathNavLi : Css.navLI}>Projects</li>
                        <li onClick={contactNev} className={location.pathname === '/Contact' ? Css.pathNavLi : Css.navLI}>Contact</li>
                    </ul>
                    <div className={Css.Box_Modal}>
                            <FaGithub className={Css.Icon} />
                            <FaLinkedin className={Css.Icon} />
                            <FaInstagramSquare className={Css.Icon} />
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar