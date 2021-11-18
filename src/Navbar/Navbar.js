import React from 'react'

function Navbar() {
    return (
        <div>
    <header className="header">
    <div id="menu-btn" className="fas fa-bars" />
    <a href="#" className="logo"><span>max</span>wheels </a>
    <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#vehicules">vehicules</a>
          <a href="#services">services</a>
          <a href="#Store">Store</a>
          <a href="#reviews">reviews</a>          
          <a href="#Contact">Contact</a>    
          <a href="#Login">Login</a>  
    </nav>
    </header>
        </div>
    )
}

export default Navbar
