import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/SideBar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/RightBar/Rightbar'

import "./homepage.css"

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="container">
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </div>
    </>

  )
}
