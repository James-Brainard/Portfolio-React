// return jsx for RESUME
// download my "resume" clickable to download
// Front-end Proficiencies - <ul> containing my Front end pros
// Back-end Proficiencies - <ul> containing my Back end pros
import React from 'react'
import './Resume.modules.css'
import jbResume from '../../assets/james-resume.pdf';

function Resume() {
  return (
    <>
      <div>
        <h4>Resume</h4>
        {/* Find a way to add resume HIDE it then link below in the anchor tag */}
        <p>Download my <a href={jbResume} download="James Brainard Resume">resume</a></p>
        <div className="d-flex">
          <div className="container">
            <h5>Front-end proficiencies</h5>
            <ul className="skills container col-12 col-md-6">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    Javascript
                  </li>
                  <li>
                    jQuery
                  </li>
                  <li>
                    Responsive Design
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Bootstrap
                  </li>
            </ul>
          </div>
          <div className="container">
            <h5>Back-end proficiencies</h5>
            <ul className="skills container col-12 col-md-6">
                <li>
                  APIs
                </li>
                <li>
                  Node
                </li>
                <li>
                  Express
                </li>
                <li>
                  MySQL, Sequelize
                </li>
                <li>
                  MongoDB, Mongoose
                </li>
                <li>
                  REST
                </li>
                <li>
                  GraphQL
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume