import React from 'react';
import "./Home.css";
import Photo from "./perfil-photo.jpeg";


function Home() {
  return (
    <div className='home-container' id='Home'>
      <img id="photo" src={Photo} alt="Alan Silva" />
      <div className="presentation-section">
        <h2>Presentation(Salute)</h2>
        <p>Presentation(Short p)</p>
      </div>
      <div className="contact-section">
        <p className='contact-title'>Contact Me</p>
        <p>alansilvanfuerza@gmail.com</p>
        <p>+598 92 756 833</p>
        <p>Montevideo, Uruguay</p>
      </div>
    </div>
  )
}

export default Home