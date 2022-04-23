import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { useParams } from "react-router-dom";

const PropertyTypeList = () => {
    
    const [properties , setProperties] = useState([{
        id: 0,
        type: "",
        image: "",
        
      }]);
    

 
    
      useEffect(()=>{
    
        const URL = 'http://localhost:5001/propertType'
        //MAKE AN AJAX request
    
        fetch(URL)
        .then(response=>response.json())
    
        .then(json=>{
         
    
          setProperties(json)
        })
        .catch(err=>console.log(err))
    
      }, [])
    
      return (
        
        <div>
          <Header/>
          <main>
          {properties.map(property=>( <PropertyCard id={property.id} type={property.type} image ={property.img}  />))}
            
          </main>
          <Footer/>
        </div>
    
      )
}

export default PropertyTypeList