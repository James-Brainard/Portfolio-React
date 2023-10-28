import React from 'react'
import AboutCard from '../../components/AboutMe'
import profilePic from '../../images/JB-photo.jpg';

const aboutInfo = {
  title: "Welcome to my Portfolio!",
  welcome: "James Brainard",
  image: `${profilePic}`,
  aboutmeDesc: "I'm a budding Software Developer with a background in insurance and sales. My coding journey started with completing the edX UCI Full Stack Web Development boot camp. I'm passionate about crafting efficient code and eager to merge my unique experiences to create user-centric web solutions. Open to new opportunities in web development and software development. Let's create something exceptional together!",
}

function Aboutme() {
  return (
    <>
      <AboutCard information={aboutInfo} />
    </>
  )
}

export default Aboutme;