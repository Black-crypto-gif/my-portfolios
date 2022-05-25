import React from 'react'
import react from '../asset/react.png'
import { useState, useEffect } from 'react'

function Testimonial() {
    const [ date, setDate ] = useState('');
    // using useEffect to set the date :
    useEffect(()=>{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();  
        setDate('Published at : ' + year + '/' + month + '/' + day);
    },[])

  return (
    <>
    <div id="testimonial"className="testimonial-card">
        <div className="testimonial-cards">
            <img src={react} alt="testi" />
            <h3 className="testimonial-title">
                Name and nickname
            </h3>
            <p className="testimonial">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque optio perferendis quaerat culpa, reprehenderit iure cum debitis suscipit quisquam nihil itaque dolorum cumque recusandae adipisci voluptas ratione corrupti, laudantium inventore.
            </p>
            <span className="testimonial-date">
                {date}
            </span>
        </div>
        <div className="testimonial-cards">
            <img src={react} alt="testi" />
            <h3 className="testimonial-title">
                Name and nickname
            </h3>
            <p className="testimonial">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque optio perferendis quaerat culpa, reprehenderit iure cum debitis suscipit quisquam nihil itaque dolorum cumque recusandae adipisci voluptas ratione corrupti, laudantium inventore.
            </p>
            <span className="testimonial-date">
            {date}
            </span>
        </div>
        <div className="testimonial-cards">
            <img src={react} alt="testi" />
            <h3 className="testimonial-title">
                Name and nickname
            </h3>
            <p className="testimonial">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque optio perferendis quaerat culpa, reprehenderit iure cum debitis suscipit quisquam nihil itaque dolorum cumque recusandae adipisci voluptas ratione corrupti, laudantium inventore.
            </p>
            <span className="testimonial-date">
            {date}
            </span>
        </div>
    </div>
    </>
  )
}

export default Testimonial