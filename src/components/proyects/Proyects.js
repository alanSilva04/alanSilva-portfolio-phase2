import React from 'react';
import "./Proyects.css";
import Proyectcard from './Proyectcard';
import data from './proyects-data/data';

function Proyects() {

  const cardItem = data.map((proyect) => 
    <Proyectcard 
      title={proyect.title}
      description={proyect.description}
      url={proyect.url}
      image={proyect.image}
      techs={proyect.techs}
      key={proyect.id}
    />)


  return (
    <div id='Proyects'>
      <hr />
      <h3 className='proyects-title'>Latest Projects</h3>
      <div className='proyect-container'>
        {cardItem}
      </div>
    </div>
  )
}

export default Proyects