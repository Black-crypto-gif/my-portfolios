import React from 'react'
import CodeImg from '../asset/CodeLab.png'

function Code() {
  return (
      <section id='code-lab'>
        <div className="code-container">
            <div className="code-description">
            <h1 className="code-title">
               DataBase management
            </h1>
            <p className="code-text">
                We use multiple databases to store your data.
                Like a local database, a remote database, a cloud database, etc.
                for example :
                Firebase, MongoDB, MySQL, PostgreSQL, etc.
            </p>
            </div>
            
            <img src={CodeImg} alt="code-img" className='code-img'/>
            
        </div>

        </section>

  )
}

export default Code