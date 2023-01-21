import React, { Fragment } from 'react'
import '../profile/Profile.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


const Profile = () => {
  return (
    <Fragment>
      <div className="profile">
        <Navbar />

        <div className="profilewrapper">
            <Sidebar />
            <div className="profileright">
                <div className="profilerighttop">
                    <div className="profilecover">
                        <img src="/assets/profilecover/cover.jpeg" alt=""  className='profilecoverimg'/>
                        <img src="/assets/person/femzy2.jpeg" alt="" className='profileuserimg'/>
                    </div>
                    <div className="profileinfo">
                        <h4 className="profileinfoname">Oluwafemi Fadayomi</h4>
                        <span className="profileinfodesc">Focused...</span>
                    </div>
                </div>
                <div className="profilerightbottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
