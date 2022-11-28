import React from 'react'
import { RequestState } from '../../lib/types'
import { LoadingComponent } from '../loading/loading'
import { VerticalSpace } from '../vertical-space/vertical-space'
import DashboardCardsComponent from './dashboard-cards-component'
import DashboardChartsComponent from './dashboard-chart-component'
import './manager-data-analytics.css'

export default function ManagerDataAnalyticsComponent({
    reportParametersRequestState,
    reportParameters,
    reportParametersErrorMessage,
    reportDataRequestState,
    reportData,
    reportDataErrorMessage,
    onDateRangeChanged,
    chartCategory,
    onChangeChartCategory,
    inputValues,
    onChangeInputValues
}) {
    return (
        <>
            <div>
                <h3 className='dashboard-content'>
                    Dashboard
                </h3>
            </div>
            {
                reportParametersRequestState !== RequestState.COMPLETED ?
                    <LoadingComponent /> :
                    <DashboardCardsComponent payload={reportParameters}></DashboardCardsComponent>
            }
            {
                reportDataRequestState !== RequestState.COMPLETED ?
                    <LoadingComponent /> :
                    <DashboardChartsComponent
                        payload={reportData}
                        onChange={onDateRangeChanged}
                        chartCategory={chartCategory}
                        onChangeChartCategory={onChangeChartCategory}
                        inputValues={inputValues}
                        onChangeInputValues={onChangeInputValues}
                    />
            }
            <VerticalSpace height={10} />
        </>
    )
}