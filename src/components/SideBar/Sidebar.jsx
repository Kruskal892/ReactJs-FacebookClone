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
            <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" />
            <span className="listItemText">Newsfeed(Recent)</span>
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
      </div>
    </div>
  )
}
