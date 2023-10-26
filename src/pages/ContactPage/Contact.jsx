// Return header - which contains NAME - Navigation links
// render jsx for contact
// Contact Info for my Name - email - github
// Render footer
import React from 'react'
import BasicExample from '../../components/Contact'

function Contact() {
  return (
    <>
    <div>
      {/* h4 below can be a component for contact aboutme etc. Same with the two <p> tags */}
      <h4>Contact</h4>
      <p>You can <a href="mailto: james.brainard202@gmail.com">email me</a> to speak more about collaboration ideas or opportunities. </p>
      <p>Please feel free to give my <a href="https://github.com/James-Brainard">GitHub</a> a peek.</p>
    </div>
    <BasicExample />
    </>
  )
}

export default Contact