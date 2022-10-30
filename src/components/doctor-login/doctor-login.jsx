import React from 'react'
import '../patient-login/patient-login.css'
import { ErrorMessage } from '../elements/error-message'

export default function DoctorLoginComponent(
    email,
    setEmail,
    password,
    setPassword,
    onClick,
    errorMessage,
    loginState
) {
    return (
        <div className='login-form'>
            <h2 className='h2'>LIFELINE</h2>
            <form action=''>
                <label>Doctor's Email</label>
                <input type="email" placeholder='Enter your email address'

                ></input>


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
        </div>
    )
}