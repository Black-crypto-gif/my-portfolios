import React from 'react'

function SideHeader() {
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
  return (
    <div className='SideHeader'>
        <div className='SideHeader-items'>
            <li className="Side-items"><a href="#coding-skills">Coding Skills</a></li>
            <li className="Side-items"><a href="#code-lab">Database that i use !</a></li>
            <li className="Side-items"><a href="#tools">Tools</a></li>
            <li className="Side-items"><a href="#icons">Icons&Utilities</a></li>
            <li className="Side-items"><a href="">My academic profile</a></li>
            <li className="Side-items"><a href="">Universities</a></li>
        </div>
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
    </div>
  )
}

export default SideHeader