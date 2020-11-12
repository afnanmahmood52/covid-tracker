import React from 'react'
import './Precaution.css'

export default function Precaution(props) {
  return (
    <div className="precaution-card">
        <div className="prec-img-section">
            <img src={props.image} alt={props.title}/>
        </div> 
        <div className="prec-desc">
            <h2 className="title">{props.title}</h2>
        </div>

    </div>
  )
}
