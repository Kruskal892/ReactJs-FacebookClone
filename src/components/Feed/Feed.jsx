import Post from "../Post/Post"
import Share from "../Share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
