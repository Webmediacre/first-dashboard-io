
import React from "react";
import "./sidebar.css";
// import from all icons library
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
// import { Link } from "react-router-dom";

export default function Sidebar() {

    return (

        <div className="sidebar">

            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            <a href="/" className="sidebarListItem"> Home </a> 
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            <a href="/" className="sidebarListItem"> Analytics </a> 
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            <a href="/" className="sidebarListItem"> Sales </a> 
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            <a href="/users" className="sidebarListItem"> Users </a> 
                        </li>


                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            <a href="/products" className="sidebarListItem"> Products </a> 
                        </li>

                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            <a href="/products" className="sidebarListItem"> Transactions </a> 
                        </li>

                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            <a href="/products" className="sidebarListItem"> Reports </a> 
                        </li>

                    </ul>

                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>

    );

}