import React from 'react'
import './ServiceDate.css'
import { AiFillCar} from 'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa';
function ServiceDate() {
    return (
        <div className="ServiceDate">
            <div className="package-container">
      <div className="packages">
        <h1>Take a date</h1>
        <h2 className="text1">For repair</h2>
        
        <ul className="list">
          <li className="first"><input className="serviceinput" type="text" placeholder="type of your car" /></li>
          <li><input className="serviceinput" type="text" placeholder="your country" /></li>
          <li><select className="serviceinput">
              <option>type of damage</option>
              <option>Oil Change</option>
              <option>Battery Rempacment</option>
              <option>Parts Repair</option>

            </select></li>
          <li><input className="serviceinput" type="date" placeholder=""/></li>
        </ul>
        <button className="button button3">confirme date</button>
      </div>
      </div>
           
            
        </div>
    )
}

export default ServiceDate
