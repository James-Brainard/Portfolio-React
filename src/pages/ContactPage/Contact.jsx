// Return header - which contains NAME - Navigation links
// render jsx for contact
// Contact Info for my Name - email - github
// Render footer
import React from 'react'
// import BasicExample from '../../components/Contact'
import './Contact.modules.css';

function Contact() {
  return (
    <>
      <div>
        {/* h4 below can be a component for contact aboutme etc. Same with the two <p> tags */}
        <h4 className="container">Contact</h4>
        <p className="contact-email">james.brainard202@gmail.com</p>
        <p className="contact-number"> 623-824-3848 </p>
        <p className="contact-github">Please feel free to give my <a href="https://github.com/James-Brainard">GitHub</a> a peek.</p>
      </div>
    </>
  )
}

export default Contact