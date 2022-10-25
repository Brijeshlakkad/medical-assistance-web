import React from "react"
import './patient-signup.css'

export function PatientSignupComponent(props) {
    return (
        <>

            <div className='signup-form'>
                <h2 className='h2'>LIFELINE</h2>
                <form>
                    <label>First Name</label>
                    <input type='text' placeholder='Enter your first name'></input>

                    <label>Last Name</label>
                    <input type='text' placeholder='Enter your last name'></input>

                    <label>Email Address</label>
                    <input type='text' placeholder='Enter your email address'></input>

                    <label>Password</label>
                    <input type='text' placeholder='Enter your password'></input>

                    <label>Re-type Password</label>
                    <input type='text' placeholder='Re-type your password'></input>

                    <label>Date of Birth</label>
                    <input type='date' placeholder='Date Of Birth' className='date-of-birth'></input>

                    <br></br>
                    <br></br>
                    <label>Address</label>
                    <input type='text' placeholder='House Number, Street Name'></input>

                    <label>City</label>
                    <input type='text' placeholder='Enter your city'></input>

                    <label>Province</label>
                    <select id="province" name="province" className="province">
                        <option value="Quebec">Quebec</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Sasketchwen">Sasketchwen</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="Alberta">Alberta</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="New Brunswik">New Brunswik</option>
                    </select>

                    <br></br>
                    <br></br>
                    <label>Phone Number</label>
                    <input type='text' placeholder='Enter your mobile number'></input>

                    <span>By creating an account, you agree to our <button>Terms & Privacy</button> </span>
                    <div>
                        <button type='submit' className='signupbutton'><span>Sign Up</span></button>
                    </div>

                </form >
            </div >
            <div className='extra'>
            </div>
        </>
    )
}