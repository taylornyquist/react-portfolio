import React from 'react';

function Nav() {




    return (
        <React.Fragment>
            <header>
                <h1>
                    <a href="./index.html">Taylor Nyquist</a>
                </h1>
                <nav>
                    {/* Navigation UL */}
                    <ul>
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact-me">Contact Me</a>
                        </li>
                        <li>
                            <a href={require("../../assets/files/Taylor Nyquist Resume.pdf")} target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>

        </React.Fragment>



    );






}

export default Nav;