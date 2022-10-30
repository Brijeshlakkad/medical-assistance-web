import React from 'react'
import './card-otheruser.css'
import { Link } from 'react-router-dom'
import LoginImage1 from './images/counselor-login.jpg'
import LoginImage2 from './images/doctors-login.jpg'
import { PathConstants } from '../../lib/path-constants'

export default function CardOtherLoginComponent() {
    return (
        <div className='columns'>
            <div className='row image-container-login' style={{ paddingRight: "20px" }}>
                <img src={LoginImage1} className="doctor-image" alt='Mental Health' />
                <div className='middle'>
                    <div className='login-text'>
                        <Link to={PathConstants.CounselorLogin} className='login-text'>Are you a Counselor?</Link>
                    </div>
                </div>
            </div>
            <div className='row image-container-login'>
                <img src={LoginImage2} className="doctor-image" alt='Mental Health' />
                <div className='middle'>
                    <div className='login-text'>
                        Are you a Doctor?
                    </div>
                </div>
            </div>
        </div >
    )
}