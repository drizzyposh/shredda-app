import React, { Fragment } from 'react'
import Online from '../online/Online'
import '../rightbarhome/RightbarHome.scss'
import { Usersonline } from '../../data'

const RightbarHome = () => {
  return (
    <Fragment>
      <div className="rightbarhome">
        <div className="birthdaycontainer">
            <img src="/assets/birthdaygifts/gift.png" alt="" className='birthdayimg'/>

            <span className="birthdaytext">
            <b>Tosin Jacobs </b> and <b> other friends</b> have their birthday today</span>
        </div>
        <img src="/assets/ads/adv.jpg" alt="" className='rightbaradvert' />

        <span className="rightbartitle">Online Friends</span>

        <ul className="rightbarfriends">
            {Usersonline.map((u) => (
                <Online key={u.id} onlineuser={u}/>
            ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default RightbarHome
