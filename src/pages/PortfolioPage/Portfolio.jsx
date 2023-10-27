// Build a component to map through my project array
import React from 'react'
// define array of objects for my projects. follow the same process for each.
import AboutProjects from '../../components/Project';
// import each image
// below {image1 etc}
import textEditorImg from '../../images/text-editor-image.png';
import noteTakerImg from '../../images/Note-taker.png';
import hammerHelpDeskImg from '../../images/Hammer-helpDesk.png';


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
  },
]

const projectArr2 = [
  {
      title: "Hammer Help Desk",
      githubLink: "https://github.com/kyleochata/Hammer-Help-Desk",
      deployedLink: "https://radiant-wave-47724-d875b64f42d0.herokuapp.com/",
      image: `${hammerHelpDeskImg}`,
      description: "Hammer Help Desk is a user intuitive ticketing application that leverages Express, Sequelize, Handlebars, MYSQL, JavaScript and Anime,js.",
    }
]


// 
function Portfolio() {
  return (
    <>
      <h4>Portfolio</h4>
      {/* pass in the array here for project component function */}
      <section className="container">
        <div className="row">
          <div className="container col-12 col-md-4">
            <AboutProjects projects={projectArr} />
          </div>
          <div className="container col-12 col-md-4">
            <AboutProjects projects={projectArr2} />
          </div>
          {/* <div className="container col-12 col-md-4">
            <AboutProjects projects={projectArr} />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Portfolio