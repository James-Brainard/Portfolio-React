// Build a component to map through my project array
import React from 'react'
// define array of objects for my projects. follow the same process for each.
import AboutProjects from '../../components/Project';
// import each image
// below {image1 etc}
import textEditorImg from '../../images/text-editor-image.png';
import noteTakerImg from '../../images/Note-taker.png';


const projectArr = [
  {
    title: "James' Text Editor",
    githubLink: "https://github.com/James-Brainard/Text-Editor",
    deployedLink: "https://murmuring-savannah-07320-fe88749f280e.herokuapp.com/",
    image: `${textEditorImg}`,
    description: "A text editor that allows you to create, edit, and delete text. This application uses an express backend and save and retrieve note data from a JSON file.",
  },
  {
    title: "Note Taker",
    githubLink: "https://github.com/James-Brainard/express-note-taker",
    deployedLink: "https://immense-shore-33393-7933ff522b8f.herokuapp.com/",
    image: `${noteTakerImg}`,
    description: "A note taking application that allows you to create, edit, and delete notes.",
  }
]

function Portfolio() {
  return (
    <>
      <h4>Portfolio</h4>
{/* pass in the array here for project component function */}
      <AboutProjects projects={projectArr}/>
    </>
  )
}

export default Portfolio