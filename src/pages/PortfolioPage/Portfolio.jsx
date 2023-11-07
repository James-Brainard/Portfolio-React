import React from 'react';
import AboutProjects from '../../components/Project';
import textEditorImg from '../../images/text-editor-image.png';
import noteTakerImg from '../../images/Note-taker.png';
import hammerHelpDeskImg from '../../images/Hammer-helpDesk.png';
import willDoImg from '../../images/will-do.png';


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
  {
    title: "Hammer Help Desk",
    githubLink: "https://github.com/kyleochata/Hammer-Help-Desk",
    deployedLink: "https://radiant-wave-47724-d875b64f42d0.herokuapp.com/",
    image: `${hammerHelpDeskImg}`,
    description: "Hammer Help Desk is a user intuitive ticketing application that leverages Express, Sequelize, Handlebars, MYSQL, JavaScript and Anime,js.",
  },
  {
    title: "Will Do Crush Your Goals",
    githubLink: "https://github.com/kyleochata/Will-DO-Crush-your-goals",
    deployedLink: "https://will-do-7ujl.onrender.com/",
    image: `${willDoImg}`,
    description: "Will Do is an interactive MERN Stack goal setting application that transforms Will Do's into Should Do's.", 
  }
]


function Portfolio() {
  return (
    <>
      <h4 className="project-header">Portfolio</h4>
      <section>
            <AboutProjects projects={projectArr} />
      </section>
    </>
  )
}

export default Portfolio;