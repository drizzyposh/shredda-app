import React, { Fragment, useContext } from 'react'
import '../sidebar/Sidebar.scss'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupsIcon from '@mui/icons-material/Groups';
import VideocamIcon from '@mui/icons-material/Videocam';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menulink from '../menulist/Menulink';
import {motion} from 'framer-motion'
import { DarkModeContext } from '../../context/DarkModeContext';


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <Fragment>
        <div className="sidebar">
          <div className="sidebar-container">
            <Menulink Icon={<RssFeedIcon />} text="Feed"/>
            <Menulink Icon={<ChatIcon />} text="Chats"/>
            <Menulink Icon={<VideocamIcon />} text="Videos"/>
            <Menulink Icon={<GroupsIcon />} text="Friends"/>
            <Menulink Icon={<BookmarkIcon />} text="Bookmarks"/>
            <Menulink Icon={<ShoppingCartIcon />} text="Market"/>
            <Menulink Icon={<EventIcon />} text="Events"/>
            <span onClick={() => dispatch({type: "TOGGLE"})}>
              <Menulink Icon={<Brightness5Icon />} text="Theme"/></span>
            <Menulink Icon={<ExitToAppIcon />} text="Logout"/>

            <motion.button whileTap={{scale: 1.2}} className="sidebarbtn">Show More</motion.button>
            <hr className='sidebarhr'/>

            <ul className="friendlist">
              <li className="friends">
                <img src="/assets/person/femzy2.jpeg" alt="" className='friendimg'/>
                <span className="friendname">DrizzyP</span>
              </li>
              <li className="friends">
                <img src="/assets/person/seffie1.jpeg" alt="" className='friendimg'/>
                <span className="friendname">Sheffie</span>
              </li>
              <li className="friends">
                <img src="/assets/person/friend1.jpg" alt="" className='friendimg'/>
                <span className="friendname">Trisha_11</span>
              </li>
              <li className="friends">
                <img src="/assets/person/friend5.jpg" alt="" className='friendimg'/>
                <span className="friendname">Bob</span>
              </li>
            </ul>
          </div>
        </div>
    </Fragment>
  )
}

export default Sidebar
