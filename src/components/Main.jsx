import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';
//Temp import
import arcadeGame from '../img/restaurantReviews.png';
//import { FontAwesomeIcons } from '@fortawesome/react-fontawesome';


export default class Main extends Component {

    render() {

        return (
            <div>
                <Navbar />
                <main id="main">
                    <div className="intro">
                        <h1>Chetan Kumar</h1>
                        <p>A self tought programmer</p>
                        <h2>About</h2>
                        <p>Hi, there I am chetan kumar, a passionate programmer. I am curious to learning various parts of tech.....(coming soon)
                        </p>
                        <p>My story of passion...(coming soon)</p>
                        <p>I have completed different courses to get expertise on these technologies.</p>
                    </div>
                </main>
                <section className="skills">
                <h2>Skills</h2>
                <p>JavaScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>(coming-up)</p>
                </section>
                <section className="projects">
                <h2>Featured Projects</h2>
                <div className="project-container">
                    <div className="project">
                    <h3>React Neighborhood map</h3>
                    <img src={arcadeGame} alt="react neighborhood map"/>
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                <div className="project">
                    <h3>Arcade Game</h3>
                    <img src={arcadeGame} alt="arcade game" />
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                <div className="project"> 
                    <h3>restaurant Reviews</h3>
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className="project">
                    <h3>My reads: Book tracking</h3>
                    <img src={arcadeGame} alt="my reads book tracking" />
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                </div>
                </section>
                <section className="projects">
                    <h2>Projects</h2>
                <div className="project-container">

                <Projects />

                </div>
                </section>

                <Footer />

            </div>
        )
    }
}