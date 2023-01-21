import React, { Fragment } from 'react'
import '../storycard/Storycard.scss'

const Storycard = ({user}) => {
  return (
    <Fragment>
      <div className="storycard">
        <div className="overlay"></div>
            <img src={user.profilePicture} alt="" className='storyprofile' />
            <img src={user.profilePicture} alt="" className='storybg' />
            <img src="./assets/person/upload.png" alt="" className='storyadd' />
            <span className="text">{user.username}</span>
      </div>
    </Fragment>
  )
}

export default Storycard
