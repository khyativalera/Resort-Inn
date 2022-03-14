import React from 'react'
import PropertyItem from './PropertyItem'
import image1 from "../assets/img/resort1.webp"
import image2 from "../assets/img/resort2.webp"
import image3 from "../assets/img/resort3.webp"
import image4 from "../assets/img/resort4.webp"
import image5 from "../assets/img/bedandb.jpg"
import image6 from "../assets/img/motel.webp"
import image7 from "../assets/img/hostel.webp"
import image8 from "../assets/img/restaurant.webp"

const PropertyType = () => {
  return (
    <section id="section-resort-list">
    <div className= "container">
                
        <h1>Featured Resort</h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                <PropertyItem image= {image1} price = "" title= "Apartments"type="apartments" />
                <PropertyItem image= {image2} price = "" title = "Condos" type="condos"/>
                <PropertyItem image = {image3} price="" title= "Resorts" type="resorts"/>
                <PropertyItem image= {image4} price="" title="Hotels" type="hotels"/>
                <PropertyItem image= {image5} price="" title="Bed and Breakfasts" type="bed and breakfasts"/>
                <PropertyItem image= {image6} price="" title="Motels" type="motels"/>
                <PropertyItem image= {image7} price="" title="Hostels" type="hostels"/>
                <PropertyItem image= {image8} price="" title="Restaurant" type="restaurants"/>
            </div>
    </div>
</section>
  )
}

export default PropertyType