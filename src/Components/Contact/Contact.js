import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [userForm,  setUserForm] =  useState({
        email: '',
        name:'',
        message:''
    });


    const updateUser = (e) => {
        setUserForm(
           values => ({...values,[e.target.name]: e.target.value})
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send("service_jrgs3x5", "template_58bvo85", userForm, "user_pGug3749WSUW3GYNzql89")
        .then(response => {
            setUserForm({
                email: '',
                name:'',
                message:''
            })
        }, error => {
            console.log("Failed with error!", error);
        })
    }
    return (
        <>
            <section className='contact-container container' id='Contact'>
                <div className='main-heading'>
                    <h1>Contact Me</h1>
                </div>
                <div className='contact-contents'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 contact-left'>
                            <img src='assets/bg2.jpg' alt='contact-image' className='image-fluid'/>
                        </div>
                        <div className='col-12 col-lg-8 contact-right'>
                            <form onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Enter your email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={userForm.email} 
                                    onChange={updateUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Enter your name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name='name' value={userForm.name}
                                    onChange={updateUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Enter your message here</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={userForm.message}
                                    onChange={updateUser}
                                    ></textarea>
                                </div>
                                <button type='submit' className='btn btn-style' >Send</button>
                            </form>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Contact;
