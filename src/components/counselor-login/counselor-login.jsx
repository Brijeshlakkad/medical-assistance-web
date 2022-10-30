import React from 'react'
import { ErrorMessage } from '../elements/error-message'
import '../patient-login/patient-login.css'

export default function CounselorLoginComponent({
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
                <label>Couselor Email</label>
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

        </div>
    )
}


