import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import projectData from './projectData';
import uiuxData from './uiuxData';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import ModalDialog from '@mui/joy/ModalDialog';
import FormControl from '@mui/joy/FormControl';

import { GoLink } from "react-icons/go";
import { VscGithubInverted } from "react-icons/vsc";

import Css from './Projects.module.css'

function Projects() {

    const navigate = useNavigate();
    const location = useLocation();

    const ProjectNev = () => {
        navigate('/Project');
    };

    const [Data, setData] = useState(projectData);
    const [open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState("");

    const handleReadMore = (content) => {
        setOpen(true);
        setShowMore(content);
    };

    return (
        <div className={Css.Container}>
            <div className={location.pathname === '/Project' ? Css.projectPageTittle : Css.projectTittle}>
                <h2>Projects</h2>
                <p>Things I’ve built so far</p>
            </div>
            {location.pathname === '/Project' ? (
                <div className={Css.projectOption}>
                    <div className={Css.projectOptionBtn}>
                        <button className={Data === projectData ? Css.filledBtn : Css.outLineBtn} onClick={() => setData(projectData)}>Project</button>
                        <button className={Data === uiuxData ? Css.filledBtn : Css.outLineBtn} onClick={() => setData(uiuxData)}>Ui & Ux</button>
                    </div>
                </div>
            ) : (
                <div className={Css.projectOption}>
                    <div className={Css.projectOptionBtn}>
                        <button className={Data === projectData ? Css.filledBtn : Css.outLineBtn} onClick={() => setData(projectData)}>Project</button>
                        <button className={Data === uiuxData ? Css.filledBtn : Css.outLineBtn} onClick={() => setData(uiuxData)}>Ui & Ux</button>
                    </div>
                    <a onClick={ProjectNev} >View More</a>
                </div>
            )}
            <div className={Css.projectBox}>
                {location.pathname === '/Project' ? (
                    Data.map((item) => (
                        <div key={item.id} className={Css.projectCard}>
                            <div className={Css.Img}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={Css.cardBottom}>
                                <h3>{item.tittle}</h3>
                                {/* <p>{showMore[item.id] ? item.paraphrase : `${item.paraphrase.substring(0, 50)}...`}<span onClick={() => setshowMoreta({ ...showMore, [item.id]: !showMore[item.id] })}>{showMore[item.id] ? "Read Less" : "Read More"}</span></p> */}
                                <p>{item.paraphrase.substring(0, 70)}<span className={Css.readmoreBtn} onClick={() => handleReadMore(item.paraphrase)}>...Read More</span></p>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                >
                                    <ModalDialog className={Css.modalBox}>
                                        <div className={Css.modalBoxIcon}><ModalClose /></div>
                                        <Typography className={Css.modalBoxTypo}>{showMore}</Typography>
                                    </ModalDialog>
                                </Modal>
                                <p className={Css.cardBottomTech}><span>Tech stack :</span>{item.techStack}</p>
                                <div className={`${item.preview && item.gitCode ? Css.cardBottomIcon : Css.centerSingleLink
                                    }`}>
                                    {item.preview ? (
                                        <a href={item.preview} target="_blank" rel="noopener noreferrer">
                                            <span><GoLink /></span>{Data === uiuxData ? 'Figma Preview' : 'Live Preview'}</a>
                                    ) : (
                                        null
                                    )}
                                    {item.gitCode ? (
                                        <a href={item.gitCode} target="_blank" rel="noopener noreferrer">
                                            <span><VscGithubInverted /></span>View Code</a>
                                    ) : (
                                        null
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    Data.slice(0, 3).map((item) => (
                        <div key={item.id} className={Css.projectCard}>
                            <div className={Css.Img}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={Css.cardBottom}>
                                <h3>{item.tittle}</h3>
                                {/* <p>{showMore[item.id] ? item.paraphrase : `${item.paraphrase.substring(0, 50)}...`}<span onClick={() => setshowMoreta({ ...showMore, [item.id]: !showMore[item.id] })}>{showMore[item.id] ? "Read Less" : "Read More"}</span></p> */}
                                <p>{item.paraphrase.substring(0, 70)}<span className={Css.readmoreBtn} onClick={() => handleReadMore(item.paraphrase)}>...Read More</span></p>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                >
                                    <ModalDialog className={Css.modalBox}>
                                        <div className={Css.modalBoxIcon}><ModalClose /></div>
                                        <Typography className={Css.modalBoxTypo}>{showMore}</Typography>
                                    </ModalDialog>
                                </Modal>
                                <p className={Css.cardBottomTech}><span>Tech stack :</span>{item.techStack}</p>
                                <div className={`${item.preview && item.gitCode ? Css.cardBottomIcon : Css.centerSingleLink
                                    }`}>
                                    {item.preview ? (
                                        <a href={item.preview} target="_blank" rel="noopener noreferrer">
                                            <span><GoLink /></span>{Data === uiuxData ? 'Figma Preview' : 'Live Preview'}</a>
                                    ) : (
                                        null
                                    )}
                                    {item.gitCode ? (
                                        <a href={item.gitCode} target="_blank" rel="noopener noreferrer">
                                            <span><VscGithubInverted /></span>View Code</a>
                                    ) : (
                                        null
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Projects