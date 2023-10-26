// return div and p tag for "About me" avatar/pic & TEXT
import React from 'react'
import AboutCard from '../../components/AboutMe'

const aboutInfo = {
  title: "Aboutme",
  placeholder: "Pic placeholder",
  AboutmeDesc: "I'm a budding Software Developer with a background in insurance and sales. My coding journey started with completing the edX UCI Full Stack Web Development boot camp. I'm passionate about crafting efficient code and eager to merge my unique experiences to create user-centric web solutions. Open to new opportunities in web development and software development. Let's create something exceptional together!",
}

function Aboutme() {
  return (
    <>
      {/* Create a new component for the below h4 and two p tags pass the props only once defined in the component */}
      {/* <AboutCard headerText={aboutInfo.title} picPlaceholder={aboutInfo.placeholder} aboutMeDesc={aboutInfo.AboutmeDesc} />
    </> */}
    <AboutCard information={aboutInfo}/>
    </>
  )
}

export default Aboutme