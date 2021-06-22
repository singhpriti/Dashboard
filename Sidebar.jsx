import React from 'react'
import "./Sidebar.css";
import {
    LineStyle, Home,
    TrendingUp,
    // LineStyleOutlined,
    // NewReleasesSharp,
    // HeadsetRounded,
    // CreditCardTwoTone,
    // DonutLarge,
    // AllInboxOutlined,
    // FeedbackRounded,
    Message,
    SwapHorizontalCircleSharp,
    History,
    VerifiedUser,
    Money,
    BrandingWatermark,
    // PanToolRounded,
    Event,
    DoubleArrowSharp
} from "@material-ui/icons";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">

                            < Home className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <SwapHorizontalCircleSharp className="sidebarIcon" />
                            Feed
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Your Order</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <LineStyle className="sidebarIcon" />
                            1st Week
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" />
                            2nd Week
                        </li>
                        <li className="sidebarListItem ">
                            <History className="sidebarIcon" />
                            History
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Analytics</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">

                            <VerifiedUser className="sidebarIcon" />
                            Customers
                        </li>
                        <li className="sidebarListItem">
                            <Money className="sidebarIcon" />
                            Earning
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Growth
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Coustomes</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">

                            <DoubleArrowSharp className="sidebarIcon" />
                            Discount
                        </li>
                        <li className="sidebarListItem">
                            <BrandingWatermark className="sidebarIcon" />
                            Stocks
                        </li>
                        <li className="sidebarListItem">
                            <Event className="sidebarIcon" />
                            Events
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}