import React, { Fragment } from 'react'
import '../editprofile/Editprofile.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { motion } from 'framer-motion'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const Editprofile = () => {
  return (
    <Fragment>
      <div className="editprofile">
        <Navbar />
        <div className="editprofilewrapper">
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
                <div className="editprofilerightbottom">
                    <div className="top">
                        <h1>Edit User Profile</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img src="/assets/profilecover/DefaultProfile.jpg" alt="profile img" />
                        </div>

                        <div className="right">
                            <form>
                                <div className="forminput">
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlined className='icon'/>
                                    </label>
                                    <input type="file" id='file' style={{ display: "none"}}/>
                                </div>

                                <div className="forminput">
                                    <label>Name</label>
                                    <input type="text" placeholder='Oluwafemi fadayomi'/>
                                </div>
                                <div className="forminput">
                                    <label>Username</label>
                                    <input type="text" placeholder='DrizzP'/>
                                </div>
                                <div className="forminput">
                                    <label>Email</label>
                                    <input type="email" placeholder='femzyfadayomi@gmail.com'/>
                                </div>
                                <div className="forminput">
                                    <label>Phone</label>
                                    <input type="text" placeholder='+2348119292443'/>
                                </div>
                                <div className="forminput">
                                    <label>Address</label>
                                    <input type="text" placeholder='GraceCourt estate makoko road, yaba'/>
                                </div>
                                <div className="forminput">
                                    <label>Country</label>
                                    <input type="text" placeholder='Nigeria'/>
                                </div>
                                <motion.button whileTap={{ scale: 1.2}} type='submit' className='updatebutton'>Update Profile</motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Editprofile
