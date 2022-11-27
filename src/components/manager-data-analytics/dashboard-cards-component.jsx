import React from 'react'
import './dashboard-cards.css'
import { faUser, faPersonChalkboard, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function DashboardCardsComponent() {
    return (
        <div className='dashboard-card-row'>
            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-users'>
                    <FontAwesomeIcon icon={faUser} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Total Users</h3>
                    <p className='show-data-cards'>134</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-assessments'>
                    <FontAwesomeIcon icon={faPersonChalkboard} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Assessments</h3>
                    <p className='show-data-cards'>144</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-counselor'>
                    <FontAwesomeIcon icon={faUserNurse} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Councellor</h3>
                    <p className='show-data-cards'>50</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-doctor'>
                    <FontAwesomeIcon icon={faUserDoctor} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Doctor</h3>
                    <p className='show-data-cards'>43</p>
                </div>
            </div>
        </div >
    )
}