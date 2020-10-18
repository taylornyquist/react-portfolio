import React from 'react';
import './Projects.css';

function Projects() {

    return (

        <React.Fragment>

            <section id="work" className="section row">
                <div className="parent-column1">
                    <h2 className="section-title">Work</h2>
                </div>

                <div className="parent-column2">

                    <div className="work-grid-container">

                        <a href="https://taylornyquist.github.io/project-1/" target="_blank" rel="noopener noreferrer" className="work-grid-item site-1">
                            <div>
                                <h3>The Spontaneous Adventurer</h3>
                                <h4>A site for spontaneous travelers to plan their last-minute trips</h4>
                            </div>
                        </a>

                        <a href="https://fathomless-thicket-41464.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                            className="work-grid-item site-2">
                            <div>
                                <h3>Health Log</h3>
                                <h4>A health tracker.</h4>
                            </div>
                        </a>

                        <a href="https://www.awwwards.com/mobile-sites/darko-bratina-experience" target="_blank" rel="noopener noreferrer"
                            className="work-grid-item site-3">
                            <div>
                                <h3>Site 3</h3>
                                <h4>Description 3</h4>
                            </div>
                        </a>

                        <a href="https://www.awwwards.com/sites/mos-mosh" target="_blank" rel="noopener noreferrer" className="work-grid-item site-4">
                            <div>
                                <h3>Site 4</h3>
                                <h4>Description 4</h4>
                            </div>
                        </a>

                        <a href="https://www.awwwards.com/thefutureforward/" target="_blank" rel="noopener noreferrer" className="work-grid-item site-5">
                            <div>
                                <h3>Site 5</h3>
                                <h4>Description 5</h4>
                            </div>
                        </a>

                        <a href="https://www.awwwards.com/talk-the-homogenization-of-the-web-with-superhero-cheesecakes-massimo-meijer-rian-verhagen.html"
                            target="_blank" rel="noopener noreferrer" className="work-grid-item site-6">
                            <div>
                                <h3>Site 6</h3>
                                <h4>Description 6</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );

}

export default Projects;