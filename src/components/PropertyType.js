import React, { useState, useEffect } from "react";
import PropertyItem from './PropertyItem'


const PropertyType = () => {

  const [properties, setProperties] = useState([
    {
      id: 0,
      title: "",
      img: null,
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:5001/propertType')
      .then((response) => response.json())
      .then((json) => {
        setProperties(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);


  return (
    <section id="section-resort-list">
    <div className= "container">
                
        <h1>Featured Properties</h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

            {properties.map((property) => (
            <PropertyItem title={property.type} img={property.img} type={property.type} />
          ))}
              
            </div>
    </div>
</section>
  )
}

export default PropertyType

  // <PropertyItem image= {image1} price = "" title= "Apartments"type="apartments" />
  //               <PropertyItem image= {image2} price = "" title = "Condos" type="condos"/>
  //               <PropertyItem image = {image3} price="" title= "Resorts" type="resorts"/>
  //               <PropertyItem image= {image4} price="" title="Hotels" type="hotels"/>
  //               <PropertyItem image= {image5} price="" title="Bed and Breakfasts" type="bed and breakfasts"/>
  //               <PropertyItem image= {image6} price="" title="Motels" type="motels"/>
  //               <PropertyItem image= {image7} price="" title="Hostels" type="hostels"/>
  //               <PropertyItem image= {image8} price="" title="Restaurant" type="restaurants"/> 