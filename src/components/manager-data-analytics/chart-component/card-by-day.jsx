import React from 'react';
import {
    CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis,
    YAxis
} from 'recharts';
// import data from './data.json';

export default function ChartByMonthComponent({ payload }) {
    const data = React.useMemo(() => {
        let data = {};
        payload.patients.forEach((patient) => {
            const hour = new Date(patient.createdAt).getHours();
            if (data.hasOwnProperty(hour)) {
                data[hour].users++;
            } else {
                data[hour] = {
                    hours: hour,
                    users: 1
                };
            }
        })
        return Object.values(data);
    }, [payload]);
    return (
        <ComposedChart width={800}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="hours" scale="value" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="users" fill="#8884d8" />
        </ComposedChart>
    )
}