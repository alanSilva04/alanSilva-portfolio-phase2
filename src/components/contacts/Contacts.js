import React from 'react'
import "./Contacts.css"

function Contacts() {
  return (
    <div id='Contact'>
        <hr />
        <div className='contacts-container'>
            <p className='contact-item'><i className="bi bi-c-circle"></i>2022 ALAN SILVA ALL RIGHTS RESERVED</p>
            <p className='contact-item'>ALANSILVANFUERZA@GMAIL.COM</p>
            <div className="contact-item">
                <a className='contact-icon' href="https://www.linkedin.com/in/alansilva04/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                <a className='contact-icon' href="https://github.com/alanSilva04" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Contacts