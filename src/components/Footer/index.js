import React from 'react';

import './Footer.css';

function Footer() {

    return (

        <React.Fragment>

            <footer id="footer" className="container mt-5 mb-5">

                        <div className="row footer-row">

                            <div className="col-md-3 contact-links" id="email">
                                <a href="mailto:tnyquist@gmail.com">
                                    <img src={require('../../assets/icons/email-icon.png')} alt="Email Icon" />
                                </a>
                            </div>
                            <div className="col-md-3 contact-links ">
                                <a href="https://github.com/taylornyquist" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/github-icon.svg')} alt="GitHub Icon" />
                                </a>
                            </div>
                            <div className="col-md-3 contact-links">
                                <a href="https://www.linkedin.com/in/taylor-nyquist/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/linkedin-icon.svg')} alt="LinkedIn Icon" />
                                </a>
                            </div>
                            <div className="col-md-3 contact-links">
                                <a href="https://www.instagram.com/tnyquist/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../../assets/icons/instagram-icon.svg')} alt="Instagram Icon" />
                                </a>
                            </div>

                        </div>
            </footer>

        </React.Fragment>

    );

}

export default Footer;