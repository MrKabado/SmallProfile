import React from 'react'
import '../styles/Profile.css'
import ProfilePicture from './ProfilePicture'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Button from './Button'

import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'


function Profile() {
  return (
    <div>
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <div className='profile-button-holder'>
        <Button text={"Go to my Facebook"} src={facebook} href={"https://www.facebook.com/jersonjay.bonghanoy"}/>
        <Button text={"Go to my Github"} src={github} href={"https://github.com/MrKabado"}/> 
        <Button text={"Go to my Linkedin"} src={linkedin} href={"https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/"}/>
      </div>
    </div>
  )
}

export default Profile
