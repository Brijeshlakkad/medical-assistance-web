import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import { UserRole } from '../../lib/types'
import './header.css'

export default function HeaderComponent({
    userRole
}) {
    return (
        < div className="header" >
            <Link to={PathConstants.Home} className="logo">Lifeline</Link>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                <Link to={PathConstants.PatientLogin}>Log In</Link>
                {userRole === UserRole.PATIENT && <Link to={PathConstants.AssessmentPage}>Take Assesement</Link>}
                {userRole === UserRole.PATIENT && <a href="#about">Status</a>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorLOP}>List of Patients</Link>}
            </div>
        </ div >
    )
}