import React, { useState } from 'react';
import './Projects.css';



function Projects() {

    const [projects] = useState([

        {
            id: 1,
            title: 'Idols Initiatives',
            description: "A charity hub to follow your favorite celebrities' foundations",
            deployedUrl: 'https://radiant-temple-46938.herokuapp.com/',
            githubUrl: 'https://github.com/taylornyquist/idols-initiatives',
        },
        {
            id: 2,
            title: 'The Health Log',
            description: 'A health and fitness tracker to monitor your health and fitness goals.',
            deployedUrl: 'https://fathomless-thicket-41464.herokuapp.com/',
            githubUrl: 'https://github.com/sanders43/group-api-project',
        },
        {
            id: 3,
            title: 'The Spontaneous Adventurer',
            description: 'A site for spontaneous travelers to plan their last-minute trips',
            deployedUrl: 'https://taylornyquist.github.io/spontaneous-adventurer/',
            githubUrl: 'https://github.com/taylornyquist/spontaneous-adventurer',
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            description: 'A city by city weather forecast API powered by OpenWeather',
            deployedUrl: 'https://taylornyquist.github.io/weather-dashboard/',
            githubUrl: 'https://github.com/taylornyquist/weather-dashboard',
        },
        {
            id: 5,
            title: 'Shop Shop',
            description: 'An e-commerce site built in React with Redux state management',
            deployedUrl: 'https://mysterious-wildwood-94060.herokuapp.com/',
            githubUrl: 'https://github.com/taylornyquist/shop-shop-redux',
        },
        {
            id: 6,
            title: 'Run Buddy',
            description: 'A community to connect fitness trainers and clients.',
            deployedUrl: 'https://taylornyquist.github.io/run-buddy/',
            githubUrl: 'https://github.com/taylornyquist/run-buddy',
        },

    ]);

    return (

        <React.Fragment>

            <section id="work" className="row mt-5">
                <div className="col-md-12">
                    <h2 className="section-title">Projects</h2>

                    <div className="container">
                        <div className="col-md-12 work-projects">

                            {projects.map((project, i) => (
                                <React.Fragment key={`${project.title}-${project.id}`}>
                                    <div className="mt-5 mb-3 ">
                                        <h3><u>{project.title}</u>
                                            <span>
                                                <a className="github-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <img src={require('../../assets/icons/github-icon-12.svg')} alt="GitHub Icon" />
                                                </a>
                                            </span>
                                        </h3>
                                        <h4 className="mt-1">{project.description}</h4>

                                    </div>

                                    <a
                                        href={project.deployedUrl}
                                        target="_blank" rel="noopener noreferrer">
                                            <div className="image-container">
                                                <img
                                                className="project-image"
                                                src={require(`../../assets/images/portfolio-${project.id}.jpg`)}
                                                alt={project.title}
                                                />
                                            </div>
                                        
                                    </a>

                                </React.Fragment>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );

}

export default Projects;