import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import {Projects, FeaturedProjects} from './Projects.jsx';

//Temp import
//import { FontAwesomeIcons } from '@fortawesome/react-fontawesome';


export default class Main extends Component {
    
    render() {
        
        const skills = ["HTML5" ,"JavaScript", "CSS3", "React", "VanilaJs", "jQuery",
         "Python", "Gulp", "Responsive", "Git", "Github", "Bootstrap 4", "Sql","Jasmine Testing", "Heroku", "HTML Canvas", "Shell", "Sass"];

        return (
            <div>
                <Navbar />
                <main id="main">
                    <div className="intro">
                        <h1>Chetan Kumar</h1>
                        <p>A self tought programmer</p>
                        <h2>About</h2>
                        <p>Hi, there I am chetan kumar, a passionate programmer.</p>
                        <p>I am learning various parts of tech by my keen interest. I started my journey as front end web developer by just learning HTML and CSS. After that i got introduced to the Javascript programming language. It's totally fun to play with the code, design and features etc.</p>
                        <p>I have completed my Front End developer Nanodegree Udacity course by google india scholarship.</p>
                        <p>Recently, I got another scholarship from Facebook-Udacity for Deep learning with Pytorch</p>
                        <p>Currently Learning: Full stack <br />Deep learning</p>
                    </div>
                </main>
                <section className="skills">
                <h2>Skills</h2>
                {/* Create skills dynamic */}
                 {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
                </section>
                
                <section className="projects">
                <h2>Featured Projects</h2>
                <div className="project-container">
                    <FeaturedProjects />
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