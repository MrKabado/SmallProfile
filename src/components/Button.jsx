import React from 'react'
import '../styles/Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({text, src, href, alt, icon, iconClass}) {
  return (
    <div className='button'>
      <button>
        <img src={src} alt={alt}/>
        <a href={href}>{text}</a>
      </button>
    </div>
  )
}

export default Button
