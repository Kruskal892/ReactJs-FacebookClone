import Post from "../Post/Post"
import Share from "../Share/Share"
import "./feed.css"
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share/>
        {Posts.map ((post) => (
        <Post key={post.id} posts={post}/>
        ))}
      </div>
    </div>
  )
}
