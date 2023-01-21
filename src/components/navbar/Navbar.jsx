import React, { Fragment } from 'react'
import '../navbar/Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <Fragment>
        <div className="nav-container">
            <div className="nav-left">
                <Link to="/" style={{ textDecoration: "none"}}><span className="logo">Shredda</span></Link>
            </div>
            <div className="nav-center">
                <div className="searchbar">
                    <SearchIcon className='searchicon'/>
                    <input type="text" placeholder='Search for friends post or video' className='searchinput'/>
                </div>
            </div>

            <div className="nav-right">
                <div className="navlinks">
                    <span className="navlink">Home</span>    
                    {/* <span className="navlink">Timeline</span>     */}
                </div>   

                <div className="nav-icons">
                    <motion.div whileTap={{scale:1.2}} className="navicon-item">
                        <PersonIcon className='iconsize'/>
                        <span className="naviconbadge">2</span>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className="navicon-item">
                        <ChatBubbleIcon className='iconsize'/>
                        <span className="naviconbadge">5</span>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className="navicon-item">
                        <NotificationsIcon className='iconsize'/>
                        <span className="naviconbadge">10</span>
                    </motion.div>
                </div> 
                
                <Link to="/profile/username" style={{ textDecoration: "none"}}>
                <motion.img whileTap={{scale:1.2}} src="/assets/person/femzy2.jpeg" alt="profile photo" className='navimg'/>   
                </Link>
            </div>        
        </div>

    </Fragment>
  )
}

export default Navbar
