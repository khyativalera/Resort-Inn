import React from 'react'
import { Link } from 'react-router-dom'

const PropertyItem = (props) => {

  return (
    <div className="resort-card">

    <Link to = "PropertyTypeList" params={{ type: props.type }}> 
        <img src={props.image} alt="" type={props.type}/>   
    </Link> 

    <div className="resortContent">
        <h3>{props.title}</h3>
        <p>${props.price} per night</p>
    </div>
    
</div>
  )
}

export default PropertyItem