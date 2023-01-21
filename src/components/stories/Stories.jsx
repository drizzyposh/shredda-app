import React, { Fragment } from 'react'
import '../stories/Stories.scss'
import Storycard from '../storycard/Storycard'
import { Users } from '../../data'


const Stories = () => {
  return (
    <Fragment>
        <div className="stories">
            <div className="storycard">
                <div className="overlay"></div>
                <img src="/assets/person/femzy2.jpeg" alt="" className='storyprofile' />
                <img src="/assets/person/femo.jpeg" alt="" className='storybg' />
                <img src="/assets/person/upload.png" alt="" className='storyadd' />
                <span className="text">DrizzyP</span>
            </div>

            {Users.map((u) => (
                <Storycard key={u.id} user={u}/>
            ))}
        </div>
    </Fragment>
  )
}

export default Stories
