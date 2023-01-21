import React, { Fragment } from 'react'
import '../feed/Feed.scss'
import Post from '../post/Post'
import Share from '../share/Share'
import Stories from '../stories/Stories'
import { Posts } from '../../data'

const Feed = () => {
  return (
    <Fragment>
      <div className="feed">
        <div className="feed-container">
          <Stories />
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p}/>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Feed
