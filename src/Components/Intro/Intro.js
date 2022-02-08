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
                                    <SiLinkedin className='contact-icons' href='www.linkedin.com' target='_blank'/>
                                    <SiFacebook className='contact-icons' />
                                    <SiGithub className='contact-icons' />
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
                                            console.log(elem);
                                            return (
                                                <>
                                                    <div className='col-6 col-lg-4 card-body'>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                {elem.header}
                                                            </div>
                                                            <ul className="list-group list-group-flush">
                                                                {
                                                                    elem.tech.map((tectElem) => {
                                                                        return (
                                                                            <>
                                                                                <li className="list-group-item">{tectElem}</li>
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
