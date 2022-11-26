import React from 'react'
import CardByDayComponent from './chart-component/card-by-day'
import ChartByMonthComponent from './chart-component/chart-by-month'
import ChartByWeekComponent from './chart-component/chart-by-week'
import PieChartForTotalAssessmentsComponent from './pie-charts/pie-chart-total-assessments'
import './dashboard-chart.css'

function blockDayUser() {
    document.getElementById('users-by-month').style.display = "none";
    document.getElementById('users-by-week').style.display = "none";
    document.getElementById('users-by-day').style.display = "block";
}

function blockWeekUser() {
    document.getElementById('users-by-month').style.display = "none";
    document.getElementById('users-by-week').style.display = "block";
    document.getElementById('users-by-day').style.display = "none";
}

function blockMonthUser() {
    document.getElementById('users-by-week').style.display = "none";
    document.getElementById('users-by-month').style.display = "block";
    document.getElementById('users-by-day').style.display = "none";
}


export default function DashboardChartsComponent() {
    return (
        <div className='dashboard-chart-row'>
            <div className='dashboard-chart-columns'>
                <div className='dashboard-chart-cards'>
                    <div className='chart-toggle-header'>
                        <h3 id="charts-card-header" style={{ fontSize: "2rem" }}>New Users</h3>
                        <div className='chart-toggle-area'>
                            <button id='user-day-button' onClick={blockDayUser} className='chart-toggle-button'>Day</button>
                            <button id='user-week-button' onClick={blockWeekUser} className='chart-toggle-button'>Week</button>
                            <button id='user-month-button' onClick={blockMonthUser} className='chart-toggle-button'>Month</button>
                        </div>
                    </div>

                    <div id='users-by-day'>
                        <h3 id='chart-by-month-heading'>New Users by Day</h3>
                        <CardByDayComponent></CardByDayComponent>
                    </div>

                    <div id='users-by-month'>
                        <h3 id='chart-by-month-heading '>New Users by Month</h3>
                        <ChartByMonthComponent></ChartByMonthComponent>
                    </div>

                    <div id='users-by-week'>
                        <h3 id='chart-by-month-heading '>New Users by Week</h3>
                        <ChartByWeekComponent></ChartByWeekComponent>
                    </div>
                </div>
            </div>

            <div className='dashboard-chart-columns'>
                <div className='dashboard-chart-cards'>
                    <PieChartForTotalAssessmentsComponent></PieChartForTotalAssessmentsComponent>
                </div>
            </div>

            <div className='analytics-extra-space'></div>
        </div>
    )
}