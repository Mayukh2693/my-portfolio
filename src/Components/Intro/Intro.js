import React, { useEffect, useState, useRef } from 'react';
import './intro.css';
import IntroAPI from '../API/introAPI';
import { SiLinkedin, SiFacebook, SiGithub } from "react-icons/si";
import { init } from 'ityped'



const Intro = () => {
    const [intro, setIntro] = useState(IntroAPI);
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            backDelay: 1500,
            backSpeed: 40,
            strings:["QA Engineer", "App Tester" , "App Breaker"]
        })
    }, [])

    return (
        <>
            <section className='intro-header bg-light'>
                <div className='intro'>
                    <div className='row intro-all'>
                        <div className='col-12 col-lg-5 intro-left'>
                            <div className='intro-left-content'>
                                <img src='assets/profile-pic.jpg' alt='profile-pic'></img>
                                <div className='d-flex'>
                                    <a href='https://www.linkedin.com/in/mayukh-nath-982b9b57/' target='_blank'><SiLinkedin className='contact-icons' /></a>
                                    <a href='' target='_blank'><SiFacebook className='contact-icons' /></a>
                                    <a href='https://github.com/Mayukh2693' target='_blank'><SiGithub className='contact-icons' /></a>
                                </div>
                                <a href='#Contact'> <button className='btn btn-style'>Contact Me</button></a>
                                <a href='assets/resume-2022.pdf' download><button className='btn btn-style'>Download Resume</button></a>
                            </div>

                        </div>
                        <div className='col-12 col-lg-7 intro-right'>
                            <div className='intro-right-content'>
                                <h3>Hi there! I am</h3>
                                <h1>Mayukh Nath</h1>
                                <h3>I'm a full stack <span ref={textRef}></span></h3>
                                <br />
                                <h2>Jack of:</h2>
                                <div className='row'>
                                    {
                                        intro.map((elem) => {
                                            return (
                                                <>
                                                    <div className='col-6 col-lg-4 card-body' key={elem.header}>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                {elem.header}
                                                            </div>
                                                            <ul className="list-group list-group-flush">
                                                                {
                                                                    elem.tech.map((techElem) => {
                                                                        return (
                                                                            <>
                                                                                <li className="list-group-item" key={elem.tech}>{techElem}</li>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Intro;
