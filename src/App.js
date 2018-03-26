import React, { Component } from 'react';
import resume from './resume';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default class App extends Component {
  onClick() {
    console.log("click");
  }
  render() {
    const { link, about, education, work, skills, portfolio, contact } = resume;

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="nav">
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item navbar-item">
                  <a className="nav-link" href="#footer">Contact</a>
                </li>
              </ul>
            </div> {/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>
        <About picture={about.picture} info={about.info} contact={contact} googleLink={link}/>
        <Education detail={education}/>
        <hr className="section-devider"/>
        <Work detail={work}/>
        <hr className="section-devider"/>
        <Skills detail={skills}/>
        <Portfolio detail={portfolio}/>
        <Footer contact={contact} />
      </div>
    );
  }
}
