import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa"
import {FaCheckCircle} from "react-icons/fa"
import Header from '../components/Header'
import Footer from '../components/Footer'

const PropertyDescription = () => {
    const [property , setProperty] = useState([{
        id: 0,
        title: "",
        rating: "",
        image: "",
        price: "",
        type: "",
        description: "",
        amenities: "",
        location: "",
        bestseller: false
      }]);

      const { id } = useParams();
    
      useEffect(()=>{
    
        const URL = `http://localhost:5001/properties/${id}`
        //MAKE AN AJAX request
    
        fetch(URL)
        .then(response=>response.json())
    
        .then(json=>{
         
    
          setProperty(json)
        })
        .catch(err=>console.log(err))
    
      }, [id])
    
  return (
    <div>
      <Header/><br/><br/>
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                <div className="col-md-4">
                        < img src={property.image} className="card-img" alt="Property Image"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{property.title}</h4>
                        <div className="text-success"><strong> {property.price}</strong></div>
                        <p className="card-text"> {property.description}</p>
                        <div><FaMapMarkerAlt/>{property.location}</div>
                        <hr/>
                        <h4>Rules</h4>
                        <ul>
                            <li>No pets allowed</li>
                            <li>No Smoking</li>
                            <li>Emergency contact : 911</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-success"><FaCheckCircle/> {property.amenities}</small>
                </div>
            </div>
        </div>
    </div>
</div><br/><br/>
<Footer/>
</div>
    
  )
}

export default PropertyDescription