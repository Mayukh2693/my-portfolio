import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    return (
        <>
            <section className='testimonials-container bg-light' id='Testimonials'>
                <div className='testimonials-header'>
                    <h1>Testimonials</h1>
                </div>
                <div className='testimonials-content'>
                    <div className='testimonial-card'>
                        <h4>
                            Preeti Sharma
                        </h4>
                        <h6>
                            - Vice President, Morgan Stanley
                        </h6>
                        <p>
                            Mayukh is great to work with
                        </p>
                    </div>
                    <div className='testimonial-card'>
                        <h4>
                            Vaibhav Ganatra
                        </h4>
                        <h6>
                            - Lead QA Engineer, ThoughtTrace
                        </h6>
                        <p>
                            Mayukh is great to work with, Good 
                            with QA stuff
                        </p>
                    </div>
                </div>

            </section>

        </>
    )
};

export default Testimonials;
