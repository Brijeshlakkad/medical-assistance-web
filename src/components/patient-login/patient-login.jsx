import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RedTertiary } from '../../css/colors'
import { PathConstants } from '../../lib/path-constants'
import './patient-login.css'

const ErrorMessage = styled.div`
    color: ${RedTertiary};
    margin-top: 15px;
    display: flex;
    justify-content: center;
`

export function PatientLoginComponent({
    email,
    setEmail,
    password,
    setPassword,
    onClick,
    errorMessage,
    loginState
}) {
    return (
        <div className='login-form'>
            <h2 className='h2'>LIFELINE</h2>
            <form action=''>
                <label>User Email</label>
                <input type="text" placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                <label>Password</label>
                <input type="password" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />

                <div className='buttons'>
                    <button type='submit' className='loginbutton' onClick={(e) => {
                        e.preventDefault();
                        onClick();
                    }}><span>Login</span></button>
                </div>
            </form>
            {loginState && <ErrorMessage>
                {errorMessage}
            </ErrorMessage>
            }
            <div className='signup'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.PatientSignup} className='signuplink'>Sign Up</Link>
            </div>
        </div>
    )
}
