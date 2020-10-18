import React from 'react';

import './Contact.css';

function Contact() {

    return (

        <React.Fragment>

            <section id="contact-me" className="section row">
                <div className="parent-column1">
                    <h2 className="section-title">Contact Me</h2>
                </div>

                <div className="parent-column2">
                    <div className="contact-links">

                        <ul>
                            <li>

                            </li>
                            <li>
                                <a href="mailto:tnyquist@gmail.com">
                                    <img src={require('../../assets/icons/email-icon.png')} alt="Email Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/taylornyquist" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/github-icon.svg')} alt="GitHub Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/taylor-nyquist/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/linkedin-icon.svg')} alt="LinkedIn Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/tnyquist/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/instagram-icon.svg')} alt="Instagram Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );

}

export default Contact;