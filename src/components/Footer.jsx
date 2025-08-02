import React from 'react'
import '../styles/Footer.css'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className='footer'>
        <p>© {new Date().getFullYear()} Jerson Jay Bonghanoy. All rights reserved.</p><br />

        <div>
          <p>Contact Me:</p>
          <p><FontAwesomeIcon icon={faEnvelope}/> jersonjaybonghanoy@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +639915337918</p>
        </div>       
    </footer>
  )
}

export default Footer
