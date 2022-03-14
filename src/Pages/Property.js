import React,{useState,useEffect} from 'react';
import '../assets/css/PropertyStyle.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

const Property = () => {

  const [property , setProperty] = useState([{
    id: 0,
    title: "",
    image: "",
    price: "",
    description: ""
  }]);

  useEffect(()=>{

    const URL = 'http://localhost:3000/property'
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

export default Property