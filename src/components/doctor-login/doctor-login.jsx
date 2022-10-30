import React from 'react';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../lib/path-constants';
import { ErrorMessage } from '../elements/error-message';
import '../patient-login/patient-login.css';

export default function DoctorLoginComponent({
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
                <label>Doctor's Email</label>
                <input type="email" placeholder='Enter your email address'
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
            <div className='signup-box'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.DoctorSignup} className='signup-link'>Sign Up</Link>
            </div>
        </div>
    )
}