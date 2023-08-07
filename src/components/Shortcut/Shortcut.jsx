import React from 'react'
import './shortcut.css'

export default function Shortcut({shortcut}) {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={shortcut.groupPicture} alt="" className="sideBarFriendImg" />
        <span className="sideBarFriendName">{shortcut.groupName}</span>
      </li>
    </div>
  )
}
