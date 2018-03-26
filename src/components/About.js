import React, { Component } from 'react';

export default class About extends Component {
  renderInfo() {
    return (
      this.props.info.map((paragraph, index) => {
        return (
          <p key={index}>{paragraph}</p>
        )
      })
    )
  }
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 about-left-section">
              <img className="img-fluid rounded-circle mx-auto" src={this.props.picture} alt="Wei-Yuan Wen"/>
              <div className="d-flex justify-content-center">
                <a href="./assets/Resume.pdf" target="_blank">
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  Resume
                </a>
              </div>
              {/* <a href={this.props.googleLink} target="_blank">
                <i className="fa fa-file-text" aria-hidden="true"></i>
                Resume
              </a> */}
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
              <div className="section-subtitle">
                <h2>Wei-Yuan Wen</h2>
              </div>
              {this.renderInfo()}
              <div className="section-subtitle">
                <h2>Contact</h2>
              </div>
              <div className="social-media">
                <ul className="nav">
                  <li className="nav-item">
                    <a href={`mailto:${this.props.contact.email}`}>
                      <i className="fa fa-envelope fa-2x"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={this.props.contact.linkedin}>
                      <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a href={this.props.contact.github}>
                    <i className="fa fa-github fa-2x"></i>
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}