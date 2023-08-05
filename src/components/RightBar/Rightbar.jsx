import "./Rightbar.css"
import { Users } from "../../dummyData"
import Contact from "../Contact/Contact"
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="sponsorContainer">
          <div className="sponsorTitle">
            <b>Sponsored By</b>
          </div>
          <div className="sponsorWrapper">
            <img src="/assets/ad.png" alt="" className="sponsorImg" />
            <span className="sponsorDecs">Lorem ipsum dolor sit amet consectetur.</span>
          </div>

          <div className="sponsorWrapper">
            <img src="/assets/ad2.jpg" alt="" className="sponsorImg" />
            <span className="sponsorDecs">Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <hr />
        </div>
        
        <div className="birthdayContainer">
          <div className="birthdayTitle">
            <b>Birthday</b>
          </div>
          <div className="birthdayWrapper">
            <img src="/assets/gift.png" alt="" className="birthdayIcon" />
            <span className="birthdayDecs">Today is the birthday of <b>T.Đạt</b> and <b>3 others</b></span>
          </div>
        </div>
        <hr />

        <div className="contactContainer">
          <b className="contactTitle">Contacts</b>
          <ul className="contactList">
          {Users.map(user => (
            <Contact key={user.id} users={user}/>
          ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
