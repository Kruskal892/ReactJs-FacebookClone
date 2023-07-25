import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className="postContainer">
        <div className="postTop">
          <div className="postTop__LeftSide">
            <img src="/assets/person/avatar.jpg" alt="" className="postTop-ProfileImg" />
            <div className="postTopInfo">
              <span className="postTop-Username">Anh Minh</span>
              <span className="postTop-TimeStamp">5 minutes ago</span>
            </div>
          </div>
          <div className="postTop__RightSide">
            <MoreVertIcon sx={{ color: 'white' }} />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottom_LeftSide">
            <img src="/assets/like.png" alt="" className="postBottomReaction" />
            <img src="/assets/heart.png" alt="" className="postBottomReaction" />
            <span className="postBottomCounter">Many people liked this</span>
          </div>
          <div className="postBottom_RightSide">
            <span className="postBottomComment">69 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
