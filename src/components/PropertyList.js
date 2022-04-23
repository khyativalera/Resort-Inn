import React,{useState,useEffect} from 'react';
import PropertyItem from './PropertyItem'
import image1 from "../assets/img/resort1.webp"
import image2 from "../assets/img/resort2.webp"
import image3 from "../assets/img/resort3.webp"
import image4 from "../assets/img/resort4.webp"


const PropertyList = () => {


  return (
<section id="section-resort-list">
    <div className= "container">
                
        <h1>Featured Resort</h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                <PropertyItem img= {image1} price = "70" title= "Seneca College Room" />
                <PropertyItem img= {image2} price = "260" title = "Paris Hotel"/>
                <PropertyItem img = {image3} price="100" title= "Teinidad and Tobago privae room"/>
                <PropertyItem img= {image4} price="40" title="Toronto Guest House"/>
            </div>
    </div>
</section>

  );
};

export default PropertyList