import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { useParams } from "react-router-dom";

const PropertyTypeList = (props) => {
    
    const [properties , setProperties] = useState([{
        id: 0,
        title: "",
        image: "",
        price: "",
        description: ""
      }]);
      console.log(props)

      let params = useParams();
    
      useEffect(()=>{
    
        const URL = 'http://localhost:8000/property?type='+props.type
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
          {properties.map(property=>( <PropertyCard id={property.id} title={property.title} image ={property.image} price={property.price} description={property.description} />))}
            
          </main>
          <Footer/>
        </div>
    
      )
}

export default PropertyTypeList