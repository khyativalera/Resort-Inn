import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa"
import {FaCheckCircle} from "react-icons/fa"

const PropertyDescriptionCard = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="propertyImage" src="" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Property title</h4>
                        <div className="text-success">$ Price CAD</div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div><FaMapMarkerAlt/>Location</div>
                        <hr/>
                        <h4>Rules</h4>
                        <ul>
                            <li>No pets allowed</li>
                            <li>No Smoking</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-success"><FaCheckCircle/> Text</small>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PropertyDescriptionCard