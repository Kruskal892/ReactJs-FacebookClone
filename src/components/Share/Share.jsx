import React from 'react'
import './share.css'
// import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
export default function Share() {
  return (
    <div className='share'>
      <div className="shareContainer">
        <div className="shareTop">
            <img src="/assets/person/avatar.jpg" alt="" className="userProfileImg" />
            <input type="text" className="userPostInput" placeholder="Anh, What's in your mind?"/>
        </div>
        <hr className="shareLine" />
        <div className="shareBot">
            <div className="shareOptions">
                <img height="24" className='shareOptionImg' width="24" alt=""  src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"/>
                <span className='shareOptionTitle'>Live Stream</span>
            </div>

            <div className="shareOptions">
                <img height="24" className='shareOptionImg' width="24" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"/>
                <span className='shareOptionTitle'>Photos/Video</span>
            </div>

            <div className="shareOptions">
                <img height="24" className='shareOptionImg' width="24" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"/>                
                <span className='shareOptionTitle'>Feelings/Activities</span>
            </div>
        </div>
      </div>
    </div>
  )
}
