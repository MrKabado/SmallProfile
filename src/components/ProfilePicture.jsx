import React from 'react'
import ProfilePic from '../assets/profile-no-bg.png' 
import '../styles/ProfilePicture.css'

function ProfilePicture() {
  return (
    <div>
      <div className='profile-holder'>
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </div>
  )
}

export default ProfilePicture
