import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import './header.css'

export default function HeaderComponent() {
    return (
        <div className="header">
            <Link to={PathConstants.Home} className="logo">Lifeline</Link>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                <Link to={PathConstants.AssessmentPage}>Take Assesement</Link>
                <a href="#about">Status</a>
                <Link to={PathConstants.PatientLogin}>Log In</Link>
            </div>
        </div>
    )
}

