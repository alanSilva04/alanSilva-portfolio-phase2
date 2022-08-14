import React from 'react';
import "./Proyects.css";
import Proyectcard from './Proyectcard';
import data from './proyects-data/data';

function Proyects() {
  return (
    <div className='proyect-container'>
      <Proyectcard 
        title={data.title}
        description={data.description}
        url={data.url}
        image={data.image}
        techs={data.techs}
      />
    </div>
  )
}

export default Proyects