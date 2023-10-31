import React from 'react';
import jbResume from '../../assets/james-resume.pdf';
import Marquee from "react-fast-marquee";
// Import imgs for marquee effect
import html from '../../images/marquee/html.svg';
import css from '../../images/marquee/css.svg';
import js from '../../images/marquee/javascript.svg';
import bootStrap from '../../images/marquee/bootstrap.svg';
import bulma from '../../images/marquee/bulma.svg';
import express from '../../images/marquee/express.svg';
import graphql from '../../images/marquee/graphql.svg';
import handlebars from '../../images/marquee/handlebars.svg';
import heroku from '../../images/marquee/heroku.svg';
import jquery from '../../images/marquee/jquery.svg'; 
import mongo from '../../images/marquee/mongo.svg';
import mysql from '../../images/marquee/mysql.svg';
import nodejs from '../../images/marquee/nodejs.svg';
import react from '../../images/marquee/react.svg';

const MarqueeEffect = () => {
  return (
    <Marquee
      gradient={true}
      speed={100}
      pauseOnHover={true}
      direction='right'
      gradientColor='#2b5876'
      gradientWidth='125px'
      >
        <div>
          <img className='marquee-img' src={html}></img>
          <p>HTML</p>
        </div>
        <div>
          <img className='marquee-img' src={css}></img>
          <p>CSS</p>
        </div>
        <div>
          <img className='marquee-img' src={js}></img>
          <p>JavaScript</p>
        </div>
        <div>
          <img className='marquee-img' src={bootStrap}></img>
          <p>Bootstrap</p>
        </div>
        <div>
          <img className='marquee-img' src={bulma}></img>
          <p>Bulma</p>
        </div>
        <div>
          <img className='marquee-img' src={express}></img>
          <p>Express</p>
        </div>
        <div>
          <img className='marquee-img' src={graphql}></img>
          <p>GraphQL</p>
        </div>
        <div>
          <img className='marquee-img' src={handlebars}></img>
          <p>Handlebars</p>
        </div>
        <div>
          <img className='marquee-img' src={heroku}></img>
          <p>Heroku</p>
        </div>
        <div>
          <img className='marquee-img' src={jquery}></img>
          <p>jQuery</p>
        </div>
        <div>
          <img className='marquee-img' src={mongo}></img>
          <p>MongoDB</p>
        </div>
        <div>
          <img className='marquee-img' src={mysql}></img>
          <p>MySQL</p>
        </div>
        <div>
          <img className='marquee-img' src={nodejs}></img>
          <p>Node.js</p>
        </div>
        <div>
          <img className='marquee-img' src={react}></img>
          <p>React</p>
        </div>
      </Marquee>
  )
}

function Resume() {
  return (
    <>
      <div>
        <h4>Resume</h4>
        <p className="download-resume">Download my <a className="resume-download" href={jbResume} download="James Brainard Resume">resume</a></p>
        <div className="marquee-effect">
          <MarqueeEffect />
        </div>
        <div className="d-flex">
          <div className="container">
            <h5>Front-end proficiencies</h5>
            <ul className="skills container col-12 col-md-6">
                  <li>
                    HTML/CSS
                  </li>
                  <li>
                    Handlebars
                  </li>
                  <li>
                    jQuery
                  </li>
                  <li>
                    Javascript
                  </li>
                  <li>
                    Responsive Design
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Bootstrap/Bulma
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
                  MySQL/Sequelize
                </li>
                <li>
                  MongoDB/Mongoose
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

export default Resume;