import React from 'react'
import CardByDayComponent from './chart-component/card-by-day'
import ChartByMonthComponent from './chart-component/chart-by-month'
import ChartByWeekComponent from './chart-component/chart-by-week'
import PieChartForTotalAssessmentsComponent from './pie-charts/pie-chart-total-assessments'
import { MotionPrimary } from '../../css/colors'

import './dashboard-chart.css'

function blockDayUser() {
    document.getElementById('users-by-month').style.display = "none";
    document.getElementById('users-by-week').style.display = "none";
    document.getElementById('users-by-day').style.display = "block";

    document.getElementById('user-day-button').style.backgroundColor = MotionPrimary;
    document.getElementById('user-week-button').style.backgroundColor = "";
    document.getElementById('user-month-button').style.backgroundColor = "";
}

function blockWeekUser() {
    document.getElementById('users-by-month').style.display = "none";
    document.getElementById('users-by-week').style.display = "block";
    document.getElementById('users-by-day').style.display = "none";

    document.getElementById('user-week-button').style.backgroundColor = MotionPrimary;
    document.getElementById('user-day-button').style.backgroundColor = "";
    document.getElementById('user-month-button').style.backgroundColor = "";
}

function blockMonthUser() {
    document.getElementById('users-by-week').style.display = "none";
    document.getElementById('users-by-month').style.display = "block";
    document.getElementById('users-by-day').style.display = "none";

    document.getElementById('user-month-button').style.backgroundColor = MotionPrimary;
    document.getElementById('user-day-button').style.backgroundColor = "";
    document.getElementById('user-week-button').style.backgroundColor = "";
}


export default function DashboardChartsComponent() {
    return (
        <div className='dashboard-chart-row'>
            <div className='dashboard-chart-columns' style={{ width: "72%" }}>
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
                        <div>
                            <form className='month-selector-form' /*onSubmit={someFunction} */>
                                <div className='tooltip'>
                                    <input type="month"
                                        id='monthYear'
                                        name='monthYear'
                                        min='2022-07'
                                        className='month-selector'
                                    >
                                    </input>
                                    <span class="tooltiptext">Month Year</span>
                                </div>
                            </form>

                        </div>
                        <ChartByMonthComponent></ChartByMonthComponent>
                    </div>

                    <div id='users-by-week'>
                        <h3 id='chart-by-month-heading '>New Users by Week</h3>
                        <form className='month-selector-form' /*onSubmit={someFunction} */>
                            <div className='tooltip'>
                                <input type="week"
                                    id='monthWeekYear'
                                    name='monthWeekYear'
                                    min='2022-W32'
                                    className='month-selector'
                                >
                                </input>
                                <span class="tooltiptext">Month Week, Year</span>
                            </div>
                        </form>

                        <ChartByWeekComponent></ChartByWeekComponent>
                    </div>
                </div>
            </div>

            <div className='dashboard-chart-columns' style={{ width: "19%" }}>
                <div className='dashboard-chart-cards right-piechart-card'>
                    <h3 id="charts-card-header" style={{ fontSize: "2rem", marginBottom: "3rem" }}>Assessments over Users</h3>
                    <PieChartForTotalAssessmentsComponent style={{ width: "400px" }}></PieChartForTotalAssessmentsComponent>
                </div>
            </div>

            <div className='analytics-extra-space'></div>
        </div>
    )
}