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

const data = [{
    name: 'Mon',
    users: 0,
}, {
    name: 'Tue',
    users: 9,
}, {
    name: 'Wed',
    users: 0,
}, {
    name: 'Thu',
    users: 12,
}, {
    name: 'Fri',
    users: 5,
}, {
    name: 'Sat',
    users: 21,
}, {
    name: 'Sun',
    users: 11,
},]

export default class ChartByWeekComponent extends Component {
    render() {
        return (
            <ComposedChart width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#413ea0" />
            </ComposedChart>
        )
    }
}