import { blue } from "@mui/material/colors";
import Shortcut from "../Shortcut/Shortcut";
import {Shortcuts} from '../../dummyData'
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
          <button className="sideBarBtn">Show More</button>
          <hr className="sideBarLine"/>
          </ul>

          <ul className="sidebarFriendList">
          <div className="shortcutTitle">Your shortcuts</div>
          {Shortcuts.map(shortcut => (
            <Shortcut key={shortcut.id} shortcut={shortcut}/>
          ))}
          </ul>

        </ul>
      </div>
    </div>
  )
}
