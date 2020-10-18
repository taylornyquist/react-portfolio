import React from 'react';
import './Hero.css';

function Hero() {




    return (
        <React.Fragment>

            {/* hero/jumbotron */}
            <section className="hero">
                <div>
                    <img id="head-shot" src={require('../../assets/images/bio-pic.jpg')} alt="Head Shot" />
                </div>
                <div className="hero-header">
                    <h2>Portfolio</h2>
                </div>
            </section>

        </React.Fragment>



    );






}

export default Hero;
