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
import { getMonthName } from '../../../lib/time-util';
import patientData from './data.json'

export default function ChartByMonthComponent() {
    const data = React.useMemo(() => {
        console.log(patientData)
        let data = {};
        patientData.patients.forEach((patient) => {
            const month = new Date(patient.createdAt).getMonth();

            if (data.hasOwnProperty(month)) {
                data[month].users++;
            } else {
                data[month] = {
                    months: getMonthName(month),
                    users: 1
                };
            }
        })
        return Object.values(data);
    },);
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
            <XAxis dataKey="months" scale="value" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#413ea0" />
        </ComposedChart>
    )
}

