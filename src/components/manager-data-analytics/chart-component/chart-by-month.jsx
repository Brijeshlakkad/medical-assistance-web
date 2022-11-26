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
    name: 'Jan',
    users: 0,
}, {
    name: 'Feb',
    users: 9,
}, {
    name: 'Mar',
    users: 0,
}, {
    name: 'Apr',
    users: 12,
}, {
    name: 'May',
    users: 5,
}, {
    name: 'Jun',
    users: 21,
}, {
    name: 'Jul',
    users: 11,
}, {
    name: 'Aug',
    users: 9,
}, {
    name: 'Sep',
    users: 8,
}, {
    name: 'Oct',
    users: 2,
}, {
    name: 'Nov',
    users: 1,
}, {
    name: 'Dec',
    users: 7,
},]

export default class ChartByMonthComponent extends Component {
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
