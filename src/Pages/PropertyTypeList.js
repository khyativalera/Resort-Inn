import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';


const PropertyTypeList = (props) => {
    
    const [property , setProperty] = useState([{
        id: 0,
        title: "",
        image: "",
        price: "",
        description: ""
      }]);
      console.log(props)
    
      useEffect(()=>{
    
        const URL = 'http://localhost:3000/property?type='+props.type
        //MAKE AN AJAX request
    
        fetch(URL)
        .then(response=>response.json())
    
        .then(json=>{
         
    
          setProperty(json)
        })
        .catch(err=>console.log(err))
    
      }, [])
    
      return (
        
        <div>
          <Header/>
          <main>
          {property.map(property=>( <PropertyCard id={property.id} title={property.title} image ={property.image} price={property.price} description={property.description} />))}
            
          </main>
          <Footer/>
        </div>
    
      )
}

export default PropertyTypeList