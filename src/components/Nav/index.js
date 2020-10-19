import React from 'react';

function Nav(props) {

    const {
        navSelected,
        setNavSelected
    } = props;

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
                            <a className={navSelected === "About Me" && 'header-active'} href="#about-me" onClick={() => setNavSelected("About Me")}>About Me</a>
                        </li>
                        <li>
                            <a className={navSelected === "Work" && 'header-active'} href="#work" onClick={() => setNavSelected("Work")}>Work</a>
                        </li>
                        <li>
                            <a className={navSelected === "Contact Me" && 'header-active'} href="#contact-me" onClick={() => setNavSelected("Contact Me")}>Contact Me</a>
                        </li>
                        <li>
                            <a className={navSelected === "Resume" && 'header-active'} href={require("../../assets/files/Taylor Nyquist Resume.pdf")} target="_blank" rel="noopener noreferrer" onClick={() => setNavSelected("Resume")}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>

        </React.Fragment>



    );






}

export default Nav;