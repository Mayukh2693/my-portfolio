import React, { useState } from 'react';
import WorkAPI from '../API/workAPI';
import './work.css';

const Work = () => {
    const [work, setWork] = useState(WorkAPI);
    const [showModal, setShowModal] = useState(false);

    const modalDisplay = () => {
        setShowModal(true);
    }

    return (
        <>
            <section className='work-container container' id='Work'>
                <div className='main-heading'>
                    <h1>Work Experiences</h1>
                </div>
                <div className='work-cards'>
                    <div className='row'>
                        {
                            work.map((elem) => {
                                return (
                                    <>
                                        <div className='col-12 col-lg-12'>
                                            <div className="jumbotron work-card-body">
                                                <h1 className="display-4 card-title">{elem.company}</h1>
                                                <p className="lead card-duration">{elem.duration}</p>
                                                <hr className="my-4" />
                                                <p className='card-text'>{elem.description}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
};

export default Work;
