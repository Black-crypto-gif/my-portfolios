import React from 'react'
import fb from '../asset/fb.png'
import Button from './Button'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-log">
            <img src={fb} alt="fb" className='fb-log' />
        </div>
        
        <div className="footer-title-text">
            <h3 className='footer-title'>
                About Us
            </h3>
            <p className='footer-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor congue, ipsum nunc
                congue nisi, eget tincidunt nisl nunc eget lorem.
            </p>
        </div>
        <div className="btn-groupe-footer">
            <Button />
            <a href='#nav'>
            <button className="back-to-top">
                ⤴  Back to top
            </button>
            </a>
        </div>
    </div>
  )
}

export default Footer