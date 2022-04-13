import React from 'react'
import html from '../asset/html5.png'
import css from '../asset/css-3.png'
import python from '../asset/python.png'
import js from '../asset/javascript.png'
import react from '../asset/react.png'
import ScrollReveal from 'scrollreveal'


function CodingSkills() {
  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.Coding-skills', slideUp);
  return (
    <div id="coding-skills" className='Coding-skills'>
        <h1 className='text-coding' >Coding Skills</h1>
        <div className="code-skills">
            <div className="icon-code">
            <div className="code-icons">
                <img src={html} alt="" className="icons-img" />
                <img src={css} alt="" className="icons-img" />
                <img src={python} alt="" className="icons-img" />
                <img src={js} alt="" className="icons-img" />
                <img src={react} alt="" className="icons-img" />
            </div>
            </div>
            
            <p className="codeSkills-description">
                I have a basic understanding of HTML, CSS, and JavaScript.<br/> I have experience with React, Node.js, Express, and MongoDB.
            </p>
        </div>
    </div>
  )
}

export default CodingSkills