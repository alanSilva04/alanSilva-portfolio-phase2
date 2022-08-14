import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar-container'>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#Home">Alan Silva</a>
            <div className="navbar-content">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#About">About Me</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#Proyects">Proyects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr />
    </div>
  )
}

export default Navbar