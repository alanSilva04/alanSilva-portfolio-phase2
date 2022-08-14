import React from 'react'
import "./Biography.css"


function Biography() {
  return (
    <div id='About'>
      <div className='bio'>
        <h3>Biography</h3>
        <p>Biography || Data about me</p>
      </div>
      <hr />
      <div className='tecnologies'>
        <h4 className='tec-title'>Most applied technologies</h4>
        <div className='tec-items'>
          <ul>
            <li>
              <i className="fa-brands fa-html5"> HTML 5</i>
            </li>
            <li>
              <i className="fa-brands fa-css3-alt"> CSS</i>
            </li>
            <li>
              <i className="fa-brands fa-react"> React</i>
            </li>
            <li>
              <i className="fa-brands fa-js"> JavaScript</i>
            </li>
            <li>
              <i className="fa-brands fa-sass"> Sass</i>
            </li>
            <li>
              <i className="fa-brands fa-bootstrap"> Bootstrap</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Biography