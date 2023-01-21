import React, { Fragment } from 'react'
import '../online/Online.scss'

const Online = ({ onlineuser }) => {
  return (
    <Fragment>
      <div className="online">
        <li className="rightbarfriend">
            <div className="rightbarimgwrapper">
                <img src={onlineuser.profilePicture} alt="" className='rightbarimg' />
                <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{onlineuser.username}</span>
        </li>
      </div>
    </Fragment>
  )
}

export default Online
