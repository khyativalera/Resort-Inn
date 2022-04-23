import React from 'react'
import { Link } from 'react-router-dom'

const PropertyItem = (props) => {

  return (
    <div className="resort-card">

    <Link to={`properties/type/${props.type}`}> 
        <img src={props.img} alt="Property Image"/>   
    </Link> 

    <div className="resortContent">
        <h3>{props.title}</h3>
        <h3><br/></h3>
    </div>
    
</div>
  )
}

export default PropertyItem