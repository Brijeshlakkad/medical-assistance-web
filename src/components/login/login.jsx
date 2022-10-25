import React from 'react'
import './login.css'
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>


export default function LoginComponent() {
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
                <span>No Account?</span><a href='' className='signuplink'> Sign Up</a>
            </div>
        </div>
    )
}
