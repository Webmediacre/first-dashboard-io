
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import "./chart.css";

export default function Chart({ title, data, dataKey, grid }){ // 'Chart' props
    
    return(
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip type="text" />
                    { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}