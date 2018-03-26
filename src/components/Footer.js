import React from 'react';

export default ({ contact }) => {
  const email_href = `mailto:${contact.email}`;

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="mx-auto" id="go-top">
              <a title="Back to Top" href="#about">
                <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <h1>Contact</h1>
        <div className="social-media">
          <ul className="nav">
            <li className="nav-item">
              <a href={email_href}>
                <i className="fa fa-envelope fa-2x"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href={contact.linkedin}>
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className="nav-item">
            <a href={contact.github}>
              <i className="fa fa-github fa-2x"></i>
            </a>
            </li>
          </ul>
          <p>This site is developed in React.js by
            <a href="eric199wen.github.io"> Wei-Yuan Wen </a>
            from the original design of Ceevee from 
            <a href="https://www.styleshout.com/"> Styleshout</a>
          </p>
        </div>
      </div>
    </footer>
  );
};