import React from 'react'
import './dashboard-chart.css'


export default function DashboardChartsComponent() {
    return (
        <div className='dashboard-chart-row'>
            <div className='dashboard-chart-columns'>
                <div className='dashboard-chart-cards'>
                    <h3 id="charts-card-header" style={{ fontSize: "2rem" }}>New Users</h3>
                    Charts
                </div>
            </div>

            <div className='dashboard-chart-columns'>
                <div className='dashboard-chart-cards'>
                    Pie Chart
                </div>
            </div>
        </div>
    )
}