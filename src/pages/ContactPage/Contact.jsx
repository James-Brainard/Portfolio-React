// Return header - which contains NAME - Navigation links
// render jsx for contact
// Contact Info for my Name - email - github
// Render footer
import React from 'react'
import './Contact.modules.css';
import phxValley from '../../images/phx-valley.jpg';

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="contact-header">Contact</h4>
          <div className="col-12 col-md-4">
            <p className="contact-email">james.brainard202@gmail.com</p>
            <p className="contact-number"> 623-824-3848 </p>
            <p className="contact-github">Please feel free to look at my <a href="https://github.com/James-Brainard">GitHub</a></p>
          </div>
          <div className="container justify-content-between col-12 col-md-6">
            <img className="valley-photo ms-md-4 ms-sm-2" width="95%" src={phxValley} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;