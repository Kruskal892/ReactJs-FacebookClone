import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"

export default function Post({posts}) {

  const result = Users.filter((user) => user.id === posts.userId);
  console.log(result);
  return (
    <div className='post'>
      <div className="postContainer">

        <div className="postTop">
          <div className="postTop__LeftSide">
            <img src={result[0].profilePicture} alt="" className="postTop-ProfileImg" />
            <div className="postTopInfo">
              <span className="postTop-Username">
              {result[0].username}
              </span>
              <span className="postTop-TimeStamp">{posts.date}</span>
            </div>
          </div>
          <div className="postTop__RightSide">
            <MoreVertIcon sx={{ color: 'white' }} />
          </div>
        </div>

        <div className="postCenter">
          <div className="postText">{posts?.desc}</div>
          <img src={posts.photo} alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottom_LeftSide">
            <img src="/assets/like.png" alt="" className="postBottomReaction" />
            <img src="/assets/heart.png" alt="" className="postBottomReaction" />
            <span className="postBottomCounter">{posts.like} people liked this</span>
          </div>
          <div className="postBottom_RightSide">
            <span className="postBottomComment">{posts.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
