import React from 'react'
import ServiceDate from './ServiceDate'

function Service() {
    return (
        <div>
            <section className="services" id="services">
        <h1 className="heading">our <span> services </span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-car" />
            <h3>car selling</h3>
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
            <i className="fas fa-tools" />
            <h3>parts repair</h3> 
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
            <i className="fas fa-car-crash" />
            <h3>car insurance</h3>
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
            <i className="fas fa-car-battery" />
            <h3>battery rempacment</h3>
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
            <i className="fas fa-gas-pump" />
            <h3>oil change</h3>
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
            <i className="fas fa-headset" />
            <h3>24/7 support</h3>
            <p>lorem ipsum dolor site, amet consectetur adispisicing elit. hic, earm?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
      </section>
      <ServiceDate />
        </div>
    )
}

export default Service
