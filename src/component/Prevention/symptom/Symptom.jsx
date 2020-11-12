import React from 'react'
import "./Symptom.css"

export default function Symptom(props) {
  return (
    <div className="symptom-container" data-aos="fade-right" data-aos-duration="1300" data-aos-offset="0" data-aos-delay="100">
        <div className="img-section">
            <img src={props.img} alt="doctor-syringe"/>
        </div>
        
        <div className="desc-section">
            <h1 className="title">{props.title}</h1>
            <p className="desc">{props.desc}</p>
        </div>
    </div>
  )
}
