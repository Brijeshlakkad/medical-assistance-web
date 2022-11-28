import React from 'react'
import './dashboard-cards.css'
import { faUser, faPersonChalkboard, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function DashboardCardsComponent({ payload }) {
    return (
        <div className='dashboard-card-row'>
            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-users'>
                    <FontAwesomeIcon icon={faUser} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Total Users</h3>
                    <p className='show-data-cards'>{payload.numTotal}</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-assessments'>
                    <FontAwesomeIcon icon={faPersonChalkboard} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Assessments</h3>
                    <p className='show-data-cards'>{payload.numAttemptedAssessment}</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-counselor'>
                    <FontAwesomeIcon icon={faUserNurse} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Councellor</h3>
                    <p className='show-data-cards'>{payload.numHasCounselorAppointment}</p>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-doctor'>
                    <FontAwesomeIcon icon={faUserDoctor} className='users-cards'></FontAwesomeIcon>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Doctor</h3>
                    <p className='show-data-cards'>{payload.numHasDoctorAppointment}<span>({payload.numInProcessingDoctorAppointment})</span></p>
                </div>
            </div>
        </div>
    )
}