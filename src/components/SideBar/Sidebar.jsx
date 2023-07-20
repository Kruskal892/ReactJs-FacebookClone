import { blue } from "@mui/material/colors";
import "./Sidebar.css"

import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <ul className="sideListItemsContainer">
          <li className="sidebarListItems">
            <img src="./assets/person/avatar.jpg" alt="" className="sidebarAvatar" />
            <span className="listItemText">Anh Minh</span>
          </li>
          <li className="sidebarListItems">
            <PeopleAltRoundedIcon sx={{ color: blue[ 500 ] }} />
            <span className="listItemText">Friend</span>
          </li>
          <li className="sidebarListItems">
            <GroupsRoundedIcon sx={{ color: blue[ 500 ] }} />
            <span className="listItemText">Group</span>
          </li>
          <li className="sidebarListItems">
            <img draggable="false" height="36" width="36" alt=""  src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" />
            <span className="listItemText">Newsfeed (Recent)</span>
          </li>
          <li className="sidebarListItems">
            <StorefrontRoundedIcon sx={{ color: blue[ 500 ] }} />
            <span className="listItemText">MarketPlace</span>
          </li>
          <li className="sidebarListItems">
            <OndemandVideoRoundedIcon sx={{ color: blue[ 500 ] }} />
            <span className="listItemText">Watch</span>
          </li>
          </ul>
          <button className="sideBarBtn">Show More</button>
          <hr className="sideBarLine"/>

          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/3.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/4.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/5.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/6.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/7.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/8.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/9.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/10.jpeg" alt="" className="sideBarFriendImg" />
              <span className="sideBarFriendName">Jane Doe</span>
            </li>
          </ul>

        </ul>
      </div>
    </div>
  )
}
