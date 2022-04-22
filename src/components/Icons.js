import React from 'react';
import utile from '../asset/utile.png'


function Icons(){
    return(
        <div id='icon-section' class='icons-section'>
            <div id='icons-content'>
                <div id='icons-title'>
                    <h3 className='icons-title'>
                        Icons 🔍 and Utilities 📦
                    </h3>
                </div>
                <div id='icons-description'>
                    <p className='icons-description'>
                         I use all kind of 3d modern icons; and also use all kind of utilities to make my projects more modern and efficient, such as:
                         Loading.js scrollreveal.js and many others.   
                    </p>
                </div>
                <div className='icons-img-animation'>
                    <img src={utile} alt="utile" className='img-icons'/>
                </div>
            </div>
            
        </div>

    )
}


export default Icons;