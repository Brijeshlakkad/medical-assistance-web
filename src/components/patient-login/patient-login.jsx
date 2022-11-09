import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import { ErrorMessage } from '../elements/error-message'
import './patient-login.css'

function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export function PatientLoginComponent({
    email,
    setEmail,
    password,
    setPassword,
    onClick,
    errorMessage,
    loginState,
    errorMessages,
    emailErrorMessages,
    passwordErrorMessages
}) {
    return (
        <div className='login-form'>
            <h2 className='h2'>LIFELINE</h2>
            <form className='loginForm' action=''>
                <label>User Email</label>
                <input type="email" placeholder='Enter your email address'
                    required
                    className='userEmailLogin'
                    autoComplete={true}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                {emailErrorMessages.email && <><span id='errorEmailMessage'>{emailErrorMessages.email}</span> <br /><br /></>}


                <label>Password</label>
                <input type="password" id='myInput' placeholder="Enter your password"
                    required
                    autoComplete={true}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                <input type="checkbox" onClick={() => showPassword()} /><label className="show-passowrd-text">Show Password</label>
                <br />
                <br />
                {passwordErrorMessages.password && <><span id='errorEmailMessage'>{passwordErrorMessages.password}</span> <br /><br /></>}

                <div className='buttons'>
                    <button type='submit' className='loginbutton' onClick={(e) => {
                        e.preventDefault();
                        onClick();
                    }}><span>Login</span></button>
                </div>
            </form >
            {loginState && <ErrorMessage>
                {errorMessage}
            </ErrorMessage>
            }
            <div className='signup-box'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.PatientSignup} className='signup-link'>Sign Up</Link>
            </div>
        </div >
    )
}