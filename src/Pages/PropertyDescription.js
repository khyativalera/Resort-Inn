import React from 'react'
import PropertyDescriptionCard from '../components/PropertyDescriptionCard'

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
    
      useEffect(()=>{
    
        const URL = 'http://localhost:3000/property/'+id
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
           {property.map(property=>( <PropertyDescriptionCard id={property.id} title={property.title}
            image ={property.image} price={property.price} description={property.description} rating={property.rating}
             type={property.type} amenities={property.amenities} location={property.location} bestseller= {property.bestseller}/>))}
      </div>
    
  )
}

export default PropertyDescription