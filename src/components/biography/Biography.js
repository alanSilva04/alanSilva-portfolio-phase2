import React from 'react'
import "./Biography.css"


function Biography() {
  return (
    <div id='About'>
      <div className='bio'>
        <h3>About Me</h3>
        <p>Work for money and code for love. <br/> I'm a new web developer guided and educated by a senior one, trained personally and in courses in pages like FreeCodeCamp.</p>
      </div>
      <hr />
      <div className='tecnologies'>
        <h4 className='tec-title'>Most applied technologies</h4>
        <div className='tec-items'>
          <ul className='tec-list'>
            <div className='tec-list-item'>
              <li><i className="fa-brands fa-react"></i> React</li>
              <li><i className="fa-brands fa-html5"></i> Html5</li>
              <li><i className="fa-brands fa-js"></i> JavaScript</li>
            </div>
            <div className='tec-list-item'>
              <li><i className="fa-brands fa-node-js"></i> Node.js</li>
              <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
              <li><i className="fa-brands fa-bootstrap"></i> Bootstrap</li>
              </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Biography