import React, { Component } from 'react'
import {
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { getDayName } from '../../../lib/time-util';

import patientData from './data.json'

export default function ChartByWeekComponent() {
    const data = React.useMemo(() => {
        let data = {};
        patientData.patients.forEach((patient) => {
            const day = new Date(patient.createdAt).getDay();
            console.log("day", day);
            if (data.hasOwnProperty(day)) {
                data[day].users++;
            } else {
                data[day] = {
                    days: getDayName(day),
                    users: 1
                };
            }
        })
        return Object.values(data);
    });
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
            <XAxis dataKey="days" scale="value" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#413ea0" />
        </ComposedChart>
    )
}
