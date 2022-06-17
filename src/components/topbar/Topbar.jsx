
import React from "react";
import "./topbar.css";
// import from all icons library
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const TopBar = () => {

    return (

        <div className="topbar">

            <div className="topbarWrapper">

                <div className="topLeft"> 
                    <span className="logo">
                        <a href="/" className="sidebarListItem"> larry dash </a> 
                    </span>
                </div>

                <div className="topRight"> 
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings /> 
                        
                    </div>
                    <img src="https://web-developer.one/imgs/who-we-are.png" alt="" className="topAvatar" />
                </div>

            </div>

        </div>

    )

}

export default TopBar;