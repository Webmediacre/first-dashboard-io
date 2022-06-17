
import React from "react";

import "./featuredInfo.css";
import { ArrowDownward } from "@material-ui/icons"

export default function featuredInfo() {
    return (
        <div className="featured">

            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoney">-11.4 <ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span> 
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoney">-1.4 <ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span> 
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost 
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoney">+2.4 <ArrowDownward className="featuredIcon" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span> 
            </div>
        </div>
    )
}