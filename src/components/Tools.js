import React from 'react'

function Tools() {
  const url = 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

  return (
    <div  id='tools'className='Tools-content'>
        <div className='tools-title'>
            <h3 className=' 
            tools-title-text'>
                Tools 🧰 
            </h3>
        </div>
        <div className="flex-tools">
        <div className='tools-description'>
        I use multiple tools to build my projects and to make it more modern and efficient, such as:
                Adobe XD and Figma.
                VSC as my code editor.
                Git as my version control system.
            </div>
        <img src={url} alt="" className='url-tools'/>
        </div>
       
    </div>
  )
}

export default Tools