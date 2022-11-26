import React from 'react'
import FooterComponent from '../footer/footer'
import HeaderComponent from '../header/header'
import DashboardCardsComponent from './dashboard-cards-component'
import DashboardChartsComponent from './dashboard-chart-component'
import './manager-data-analytics.css'

export default function ManagerDataAnalyticsComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div>
                <h3 className='dashboard-content'>
                    Dashboard
                </h3>
            </div>
            <DashboardCardsComponent></DashboardCardsComponent>
            <DashboardChartsComponent></DashboardChartsComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}