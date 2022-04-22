import React from 'react'
import logo from '../asset/logo.png'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Button from './Button'

function Header() {
  
    
  /* const [isOpen, setIsOpen] = useState('close'); */
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo" className='logo-logo'/>
            <span className="logo-text">
                My code Lab
            </span>
        </div>
        {/* <Hamburger 
            size={35}
            color='#fff'
            onToggle={() => setIsOpen(isOpen === 'close' ? 'open' : 'close')}
        /> */}
        {/* hamburger menu */}
       {/*  <div className={isOpen}>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div> */}
        <div className="nav" id='nav'>
            <div className="nav-items">
                Home
            </div>
            <div className="nav-items">
                Blog
            </div>
            <p className="nav-items">
                <a href='#card-section'>
                Projects
                </a>
            </p>
            <div className="nav-items">
                About
            </div>
        </div>
        <div className="btn-header">
        <Button />
        </div>
    </header>
  )
}

export default Header