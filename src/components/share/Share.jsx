import { Close, EmojiEmotions, PermMedia, VideoCameraFront } from '@mui/icons-material'
import React, { Fragment, useState } from 'react'
import '../share/Share.scss'

const Share = () => {
  const [file, setFile] = useState(null)


  const removeImage = () => {
    setFile(null)
  }

  return (
    <Fragment>
      <div className="share">
        <div className="share-wrapper">
            <div className="sharetop">
                <img src="/assets/person/femzy2.jpeg" alt="" className='shareprofileimg'/>
                <input type="text" placeholder="What's on your mind femi?" className='shareinput' />
            </div>

            <hr className="sharehr" />

            {/* upload images */}
            {file && (<div className='shareImgContainer'> 
              <img src={URL.createObjectURL(file)} alt="" className='shareimg'/>
              <Close className='cancel' onClick={removeImage}/>
            </div>)}

            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <VideoCameraFront className='shareicon' style={{ color: "#bb0000f2"}}/>
                        <span className="shareoptiontext">Live </span>
                    </div>
                    <label htmlFor='file' className="shareoption">
                        <PermMedia className='shareicon' style={{ color: "#2e0196f1"}}/>
                        <span className="shareoptiontext">Photo/Video </span>
                        <input type="file"  id="file" accept='.png,.jpg,.jpeg' style={{ display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareoption">
                        <EmojiEmotions className='shareicon' style={{ color: "#bfc600ec"}}/>
                        <span className="shareoptiontext">Feelings/Activity</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Share
