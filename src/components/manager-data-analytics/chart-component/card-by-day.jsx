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
    name: '6',
    users: 0,
}, {
    name: '8',
    users: 9,
}, {
    name: '10',
    users: 0,
}, {
    name: '12',
    users: 12,
}, {
    name: '14',
    users: 5,
}, {
    name: '16',
    users: 21,
}, {
    name: '18',
    users: 11,
}, {
    name: '20',
    users: 9,
}, {
    name: '22',
    users: 8,
}, {
    name: '24',
    users: 2,
},
]

export default class ChartByMonthComponent extends Component {
    render() {
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
                <XAxis dataKey="name" scale="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#413ea0" />
            </ComposedChart>
        )
    }
}