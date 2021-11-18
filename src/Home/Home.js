import React from 'react'

function Home() {
    return (
        <div>
             <section className="home" id="home">
          <h1 className="home-parallax" data-speed={-2}>find your car</h1>
          <img className="home-parallax" data-speed={5} src="https://p4.wallpaperbetter.com/wallpaper/761/672/46/superb-citroen-2cv-yellow-and-black-citroen-beetle-car-wallpaper-preview.jpg" alt="" />
          <a href="#" className="btn home-parallax" data-speed={7}> explore cars</a>
        </section>
        <section className="icons-container">
          <div className="icons">
            <i className="fas fa-home" />
            <div className="content">
              <h3>150+</h3>
              <p>branches</p>
            </div>
          </div>
          <div className="icons">
            <i className="fas fa-car" />
            <div className="content">
              <h3>4770+</h3>
              <p>car sold</p>
            </div>
          </div>
          <div className="icons">
            <i className="fas fa-users" />
            <div className="content">
              <h3>590+</h3>
              <p>happy clients</p>
            </div>
          </div>
          <div className="icons">
            <i className="fas fa-car" />
            <div className="content">
              <h3>890+</h3>
              <p>new cars</p>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Home
