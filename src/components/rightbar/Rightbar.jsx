import React, { Fragment } from 'react'
import '../rightbar/Rightbar.scss'
import { motion } from 'framer-motion'
import RightbarHome from '../rightbarhome/RightbarHome'
import Profilerightbar from '../profilerightbar/Profilerightbar'

const Rightbar = ({ profile }) => {
  return (
    <Fragment>
      <div className="rightbar">
        <div className="right-container">
          {profile ? <Profilerightbar /> : <RightbarHome />}
        </div>
      </div>
    </Fragment>
  )
}

export default Rightbar
