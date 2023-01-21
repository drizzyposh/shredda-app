import {  ChatBubbleOutline, MoreVert, ShareOutlined } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material'
import React, { Fragment } from 'react'
import { Users } from '../../data'
import '../post/Post.scss'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

  return (
    <Fragment>
        <div className="post">
            <div className="post-container">
                <div className="posttop">
                    <div className="posttopleft">
                       <Link to="/profile/username"> <img 
                        src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
                        alt="" 
                        className='postimg'/></Link>

                        <span className="postusername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                        <IconButton>
                            <MoreVert className='postvertbtn'/>
                        </IconButton >
                    </div>
                </div>

                <div className="postcenter">
                    <span className="posttext">{post.body}</span>
                    <img src={post.photo} alt="" className='postimg'/>
                </div>

                <div className="postbottom">
                    <div className="postbottomleft">
                        <motion.div whileTap={{ scale: 1.3}}>
                        <FavoriteIcon   className='bottomlefticon' style={{color: 'red'}}/>
                        </motion.div>
                        <div >
                        <ThumbUpIcon className='bottomlefticon'  style={{color: '#011631'}}/>
                        </div>
                        <span className="postlikecounter">{post.like}</span>

                    </div>

                    <div className="postbottomright">
                        <span className="commenttext">
                            {post.comment} comments share
                        </span>
                    </div>
                </div>

                <hr className="footerhr" />

                <div className="postbottomfooter">
                    <motion.div whileTap={{ scale: 1.3}} className="postbottomfooteritem">
                        <ThumbUpOffAltIcon className='footericon'/>
                        <span className="footertext">Like</span>
                    </motion.div>
                    <div className="postbottomfooteritem">
                        <ChatBubbleOutline className='footericon'/>
                        <span className="footertext">Comment</span>
                    </div>
                    <motion.div whileTap={{ scale: 1.3}}className="postbottomfooteritem">
                        <ShareOutlined className='footericon'/>
                        <span className="footertext">Share</span>
                    </motion.div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Post
