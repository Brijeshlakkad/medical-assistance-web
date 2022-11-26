import React from 'react'
import './dashboard-cards.css'

export default function DashboardCardsComponent() {
    return (
        <div className='dashboard-card-row'>
            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-users'>
                    <h3 style={{ fontSize: "1.7rem" }}>Total Users</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-assessments'>
                    <h3 style={{ fontSize: "1.7rem" }}>Assessments</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-counselor'>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Councellor</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-doctor'>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Doctor</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>
        </div >
    )
}