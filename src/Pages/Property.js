import React,{useState,useEffect} from 'react';
import '../assets/css/PropertyStyle.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { useParams } from "react-router-dom";

const Property = () => {

  const [properties , setProperties] = useState([{
    id: 0,
    title: "",
    image: "",
    price: "",
    description: ""
  }]);

  let params = useParams();

  useEffect(()=>{

    const URL = "http://localhost:8000/property"
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

      {properties
        .map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            image={property.image}
            price={property.price}
            description={property.description}
            
          />
        ))}


    
      </main>
      <Footer/>
    </div>

  )
}

// {properties.map(property=>( <PropertyCard id={property.id} title={property.title} image ={property.image} price={property.price} description={property.description} />))}
         

export default Property