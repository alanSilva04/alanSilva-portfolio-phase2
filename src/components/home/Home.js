import React from 'react';
import "./Home.css";


function Home() {
  return (
    <div className='home-container' id='Home'>
      <img id="photo" src="./imgs/perfil-photo.jpeg" alt="Alan Silva" />
      <div className="presentation-section">
        <h2>Hi! I am Alan Silva</h2>
        <p>And this is my Portfolio <br/> Thanks for visiting it!</p>
      </div>
      <div className="contact-section">
        <h4 className='contact-title'>Contact Me</h4>
        <p>alansilvanfuerza@gmail.com</p>
        <p>+598 92 756 833</p>
        <p>Montevideo, Uruguay</p>
      </div>
    </div>
  )
}

export default Home