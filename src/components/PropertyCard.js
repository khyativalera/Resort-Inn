import React,{useState,useEffect} from 'react';
import Property from '../Pages/Property';
import PropertyItem from './PropertyItem';
import { Link } from "react-router-dom";

const PropertyCard = (props) => {

  return (
    <div className="card mb-3">
  <div className="row no-gutters">
  
    <div className="col-md-4">
      <img src={props.image} className="card-img" alt="Property Image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="property-cta">
            <Link to={`/property/${props.id}`} className="button">
              View more
            </Link>
          </div>
      </div>
    </div>
  </div><br/>
</div>
  )
}

export default PropertyCard