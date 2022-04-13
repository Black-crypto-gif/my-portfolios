import React from 'react'
/* import playCode from '../asset/playCode.mp4' */
import boy from '../asset/boy.png'
import ScrollReveal from 'scrollreveal'


function Content() {
    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };
    
    ScrollReveal().reveal('.reveal', slideUp);
  return (
    <section id="welcome-page" className='reveal'>
        <div className="content">
            <div className="welcome-page-content">
                <h3 className="welcome-text type">
                    Hi, My name is MELLAL Fethi
                </h3>
                <p className="welcome-p">
                  And I'm a web developer and genetic 👨‍🔬 scientist.
                </p>
            
                <span className="add-content">
                    I'm a full-stack web developer with a passion for building 🧑 and 🧑‍💻 applications.
                </span>
            </div>
            {/* <img src="../asset/CodeLab.png/" alt="wl-img" className="welcome-img" /> */}
            {/* <video className="welcome-img" autoPlay loop muted>
                <source src={playCode} type="video/mp4"/>
            </video> */}
            <img className='icons'src={boy} alt="" />
            
        </div>
    </section>
  )
}

export default Content