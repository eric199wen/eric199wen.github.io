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
    const { about, education, work, skills, portfolio, contact } = resume;

    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="container-fluid content-container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button onClick={this.onClick} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#education">Education</a></li>
                <li className="navbar-item"><a href="#work">Work</a></li>
                <li className="navbar-item"><a href="#skills">Skills</a></li>
                <li className="navbar-item"><a href="#portfolio">Portfolio</a></li>
                <li className="navbar-item"><a href="#footer">Contact</a></li>
              </ul>
            </div> {/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>
        <About picture={about.picture} info={about.info} contact={contact} />
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
