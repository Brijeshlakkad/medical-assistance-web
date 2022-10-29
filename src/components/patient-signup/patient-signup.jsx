import React from "react";
import { ErrorMessage } from "../elements/error-message";
import './patient-signup.css';

export function PatientSignupComponent({
    user,
    onFieldChange,
    onSubmit,
    signupState,
    errorMessage
}) {
    return (
        <>
            <div className='signup-form'>
                <h2 className='h2'>LIFELINE</h2>
                <form>
                    <label>Full Name</label>
                    <input type='text' placeholder='Enter your first name' value={user.fullName} onChange={(e) => {
                        onFieldChange("fullName", e.target.value);
                    }} />

                    <label>Email Address</label>
                    <input type='text' placeholder='Enter your email address' value={user.emailAddress} onChange={(e) => {
                        onFieldChange("emailAddress", e.target.value);
                    }} />

                    <label>Password</label>
                    <input type='text' placeholder='Enter your password' value={user.password} onChange={(e) => {
                        onFieldChange("password", e.target.value);
                    }} />

                    <label>Re-type Password</label>
                    <input type='text' placeholder='Re-type your password' value={user.rePassword} onChange={(e) => {
                        onFieldChange("rePassword", e.target.value);
                    }} />

                    <label>Date of Birth</label>
                    <input type='date' placeholder='Date Of Birth' className='date-of-birth' value={user.dateOfBirth} onChange={(e) => {
                        onFieldChange("dateOfBirth", e.target.value);
                    }} />

                    <br></br>
                    <br></br>
                    <label>Address</label>
                    <input type='text' placeholder='House Number, Street Name' value={user.addressLine} onChange={(e) => {
                        onFieldChange("addressLine", e.target.value);
                    }} />

                    <label>City</label>
                    <input type='text' placeholder='Enter your city' value={user.city} onChange={(e) => {
                        onFieldChange("city", e.target.value);
                    }} />

                    <label>Province</label>
                    <select id="province" name="province" className="province" value={user.province} onChange={(e) => {
                        onFieldChange("province", e.target.value);
                    }}>
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
                    <input type='text' placeholder='Enter your mobile number' value={user.phoneNumber} onChange={(e) => {
                        onFieldChange("phoneNumber", e.target.value);
                    }} />

                    <span>By creating an account, you agree to our <a href="#/">Terms & Privacy</a> </span>
                    <div>
                        <button type='submit' className='signupbutton' onClick={onSubmit}><span>Sign Up</span></button>
                    </div>
                    {signupState && <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                    }
                </form >
            </div >
            <div className='extra'>
            </div>
        </>
    )
}