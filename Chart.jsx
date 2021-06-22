import "./Chart.css";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// export default function Chart({ title, data, dataKey, grid }) {

//     return (
//         <div className="chart">
//             <h3 className="chartTitle">{title}</h3>
//             <ResponsiveContainer width="100%" aspect={4 / 1}>
//                 <LineChart data={data}>
//                     <XAxis dataKey="name" stroke="#5550bd" />
//                     <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
//                     <Tooltip />
//                     {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// }
import React from 'react'

export default function chart() {

    const data = [
        {
            name: 'Page A',
            "Active User": 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            "Active User": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            "Active User": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            "Active User": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            "Active User": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            "Active User": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            "Active User": 3490,
            pv: 4300,
            amt: 2100,
        },


    ];
    return (
        <div className="chart">
            <h3 className="chartTitle">Sales</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data}>
                    <XAxis dataKey="name" strok="#5550bd" /><XAxis />
                    <Line type="monotone" dataKey="Active User" strok="#5550bd" />
                    <Tooltip />
                    <CartesianGrid />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}
