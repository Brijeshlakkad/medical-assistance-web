import React from 'react'
import CardByDayComponent from './chart-component/card-by-day'
import ChartByMonthComponent from './chart-component/chart-by-month'
import ChartByWeekComponent from './chart-component/chart-by-week'
import PieChartForTotalAssessmentsComponent from './pie-charts/pie-chart-total-assessments'

import { toEndHourDate, toStartHourDate } from '../../lib/time-util'
import './dashboard-chart.css'

function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}


function getDateRangeOfWeek(w, y) {
    var startDate = getDateOfISOWeek(w, y);
    // easily get ending date by adding 6 days more
    var endDate = getDateOfISOWeek(w, y);
    endDate.setDate(endDate.getDate() + 6);
    return [startDate, endDate];
}

export default function DashboardChartsComponent({ payload,
    onChange,
    chartCategory,
    onChangeChartCategory,
    inputValues,
    onChangeInputValues
}) {
    return (
        <div className='dashboard-chart-row'>
            <div className='dashboard-chart-columns' style={{ width: "72%" }}>
                <div className='dashboard-chart-cards'>
                    <div className='chart-toggle-header'>
                        <h3 id="charts-card-header" style={{ fontSize: "2rem" }}>New Users</h3>
                        <div className='chart-toggle-area'>
                            <button id='user-day-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(0);
                            }} className='chart-toggle-button'>Day</button>
                            <button id='user-week-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(1);
                            }} className='chart-toggle-button'>Week</button>
                            <button id='user-month-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(2);
                            }} className='chart-toggle-button'>Month</button>
                        </div>
                    </div>

                    {chartCategory === 0 && <div id='users-by-day'>
                        <h2 id='chart-by-month-heading'>New Users by Day</h2>
                        <div>
                            <div className='tooltip'>
                                <input type="date"
                                    id='monthYear'
                                    name='monthYear'
                                    min='2022-07-01'
                                    className='month-selector'
                                    onChange={(e) => {
                                        e.preventDefault();
                                        onChangeInputValues('day', e.target.value);
                                        onChange(toStartHourDate(e.target.value), toEndHourDate(e.target.value));
                                    }}
                                    value={inputValues.day}
                                >
                                </input>
                                <span className="tooltiptext">Day, Month, Year</span>
                            </div>
                        </div>
                        <CardByDayComponent payload={payload} />
                    </div>}

                    {chartCategory === 1 && <div id='users-by-week'>
                        <h2 id='chart-by-month-heading '>New Users by Week</h2>
                        <div className='tooltip'>
                            <input type="week"
                                id='monthWeekYear'
                                name='monthWeekYear'
                                min='2022-W32'
                                className='month-selector'
                                onChange={(e) => {
                                    e.preventDefault();
                                    let [year, week] = e.target.value.split("-");
                                    week = week.substring(1);
                                    const [startDate, endDate] = getDateRangeOfWeek(week, year);
                                    onChangeInputValues('week', e.target.value);
                                    onChange(toStartHourDate(startDate), toEndHourDate(endDate));
                                }}
                                value={inputValues.week}
                            />
                            <span className="tooltiptext">Month Week, Year</span>
                        </div>

                        <ChartByWeekComponent payload={payload} />
                    </div>}

                    {chartCategory === 2 && <div id='users-by-month'>
                        <h2 id='chart-by-month-heading'>New Users by Month</h2>
                        <div>
                            <div className='tooltip'>
                                <input type="month"
                                    id='monthYear'
                                    name='monthYear'
                                    min='2022-07'
                                    className='month-selector'
                                    value={inputValues.month}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        // console.log(" e.target.value", e.target.value)
                                        onChangeInputValues('month', e.target.value);
                                        let [year, month] = e.target.value.split("-");
                                        var firstDay = new Date();
                                        firstDay.setFullYear(year);
                                        firstDay.setMonth(Number(month) - 1);
                                        firstDay.setDate(1);

                                        var lastDay = new Date();
                                        lastDay.setFullYear(year);
                                        lastDay.setMonth(Number(month));
                                        lastDay.setDate(1);
                                        onChange(toStartHourDate(firstDay), toStartHourDate(lastDay));
                                    }}
                                >
                                </input>
                                <span className="tooltiptext">Month Year</span>
                            </div>
                        </div>
                        <ChartByMonthComponent payload={payload} />
                    </div>}
                </div>
            </div>

            <div className='dashboard-chart-columns' style={{ width: "19%" }}>
                <div className='dashboard-chart-cards right-piechart-card'>
                    <h3 id="pie-chart-card-header" style={{ fontSize: "2rem", marginBottom: "3rem" }}>Assessments over Users</h3>
                    <PieChartForTotalAssessmentsComponent style={{ width: "400px" }}></PieChartForTotalAssessmentsComponent>
                </div>
            </div>
        </div>
    )
}