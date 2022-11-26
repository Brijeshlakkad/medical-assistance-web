import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import './pie-chart-assessment.css'

const COLORS = ["#8884d8", "#82ca9d"];
const pieData = [{
    name: "Assessments",
    value: 40,
}, {
    name: "Total Users",
    value: 47.91
}
]

export default function PieChartForTotalAssessmentsComponent() {
    const CustomToolTip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };
    return (
        <>
            <PieChart width={250} height={300} >
                <Pie
                    data={pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx={120}
                    cy={120}
                    outerRadius={80}
                    innerRadius={60}
                    paddingAngle={5}

                >
                    {pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<CustomToolTip />} />
                <Legend />
            </PieChart>
        </>
    );
}



