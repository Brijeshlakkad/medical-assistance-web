import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import './patient-login.css'

export function PatientLoginComponent() {
    return (
        <div className='login-form'>
            <h2 className='h2'>LIFELINE</h2>
            <form action=''>
                <label>User Email</label>
                <input type="text" placeholder='Enter your email address' />

                <label>Password</label>
                <input type="text" placeholder="Enter your password"></input>

                <div className='buttons'>
                    <button type='submit' className='loginbutton'><span>Login</span></button>
                </div>
            </form>
            <div className='signup'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.PatientSignup} className='signuplink'>Sign Up</Link>
            </div>
        </div>
    )
}
