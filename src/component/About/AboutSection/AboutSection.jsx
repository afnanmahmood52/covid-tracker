import React from 'react'
import './AboutSection.css'


export default function AboutSection(props) {
  return (
    <div className={`about-section-${props.img_pos}`} data-aos="fade-right" data-aos-duration="850" data-offset="0">
      <div className="left-part">
        <img src={props.image} alt={props.title}/>
      </div>

      <div className="right-part">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>

    </div>
  )
}
