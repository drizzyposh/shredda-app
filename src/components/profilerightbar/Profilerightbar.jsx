import React, { Fragment } from 'react'
import '../profilerightbar/Profilerightbar.scss'
import { Link } from 'react-router-dom'

const Profilerightbar = () => {
  return (
    <Fragment>
        <div className="profilerightbar">
            <div className="profilerightbarheading">
                <span className="profilerightbartitle">User Information</span>
                <Link to="/profile/username/edit" style={{ textDecoration: "none"}}><span className="editbutton">Edit Profile</span></Link>
            </div>

            <div className="profilerightbarinfo">
                <div className="profileinfoitem">
                    <span className="profileinfokey">Email: </span>
                    <span className="profileinfovalue">femzyfadayomi@gmail.com</span>
                </div>
                <div className="profileinfoitem">
                    <span className="profileinfokey">Phone Number: </span>
                    <span className="profileinfovalue">+2348119292443</span>
                </div>
                <div className="profileinfoitem">
                    <span className="profileinfokey">Address: </span>
                    <span className="profileinfovalue">GraceCourt Estate, Lagos</span>
                </div>
                <div className="profileinfoitem">
                    <span className="profileinfokey">Country: </span>
                    <span className="profileinfovalue">Nigeria</span>
                </div>
                <div className="profileinfoitem">
                    <span className="profileinfokey">Relationship: </span>
                    <span className="profileinfovalue">Single</span>
                </div>
            </div>

            <h4 className="profilerightbartitle">Close Friends</h4>
            <div className="profileinfofollowings">
                <div className="profileinfofollowing">
                    <img src="/assets/person/bamo.jpg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">Bamo</span>
                </div>
                <div className="profileinfofollowing">
                    <img src="/assets/person/bola.jpg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">Bolade</span>
                </div>
                <div className="profileinfofollowing">
                    <img src="/assets/person/seffie1.jpeg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">Sheffie</span>
                </div>
                <div className="profileinfofollowing">
                    <img src="/assets/person/seffie2.jpeg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">Ruth</span>
                </div>
                <div className="profileinfofollowing">
                    <img src="/assets/person/femzy.jpeg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">Iyanu</span>
                </div>
                <div className="profileinfofollowing">
                    <img src="/assets/person/femo.jpeg" alt="" className='profileinfofollowingimg'/>
                    <span className="profileinfofollwingname">DrizzyP</span>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Profilerightbar