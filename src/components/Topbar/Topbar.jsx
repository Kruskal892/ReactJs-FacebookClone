import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      {/* Left Bar */}
      <div className="topBarLeft">
        <span className="logo">
          <img src="./assets/logo.png" alt="" />
        </span>

        <div className="searchBar">
          <SearchIcon />
          <input placeholder="Find on FaceBook" className="searchInput" />
        </div>
      </div>

      {/* Middle Bar */}
      <div className="topBarCenter">
        <div className="topBarLinks">
          <span className="topBarLinkItems">
            <HomeIcon />
          </span>
          <span className="topBarLinkItems">
            <OndemandVideoIcon />
          </span>
          <span className="topBarLinkItems">
            <StorefrontIcon />
          </span>
          <span className="topBarLinkItems">
            <GroupsIcon />
          </span>
          <span className="topBarLinkItems">
            <SportsEsportsIcon />
          </span>
        </div>
      </div>

      {/* RightBar */}
      <div className="topBarRight">
        <div className="topBarIcon">
          <div className="topBarIconItems">
            <WidgetsIcon />
            <span className="topBarIconBadge">1</span>
          </div>

          <div className="topBarIconItems">
            <ChatBubbleIcon />
            <span className="topBarIconBadge">1</span>
          </div>

          <div className="topBarIconItems">
            <NotificationsIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <img src="./assets/person/avatar.jpg" alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
}
