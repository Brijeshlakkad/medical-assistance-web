import React from 'react'
import { Link } from 'react-router-dom';
import { PathConstants } from '../../lib/path-constants';
import { ErrorMessage } from '../elements/error-message';

function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showRetypePassword() {
    var y = document.getElementById("myReTypeInput")
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

export function DoctorSignupComponent({
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
                    <label>Doctor Registration Number</label>
                    <input type='text' placeholder='Please Enter Your Registration Number'
                        value={user.registrationNumber}
                        required='true'
                        autoComplete='true'
                        onChange={(e) => {
                            onFieldChange("registrationNumber", e.target.value);
                        }} />

                    <label>Full Name</label>
                    <input type='text' placeholder='Enter your first name'
                        required='true'
                        autoComplete='true'
                        value={user.fullName}
                        onChange={(e) => {
                            onFieldChange("fullName", e.target.value);
                        }} />

                    <label>Email Address</label>
                    <input type='email' placeholder='Enter your email address'
                        required='true'
                        autoComplete='true'
                        value={user.emailAddress}
                        onChange={(e) => {
                            onFieldChange("emailAddress", e.target.value);
                        }} />

                    <label>Password</label>
                    <input type='password' id='myInput' placeholder='Enter your password'
                        required='true'
                        autoComplete='true'
                        value={user.password}
                        onChange={(e) => {
                            onFieldChange("password", e.target.value);
                        }} />
                    <input type="checkbox" onClick={() => showPassword()} /><label className="show-passowrd-text">Show Password</label>
                    <br />
                    <br />

                    <label>Re-type Password</label>
                    <input type='password' id="myReTypeInput" placeholder='Re-type your password'
                        required='true'
                        autoComplete='true'
                        value={user.rePassword}
                        onChange={(e) => {
                            onFieldChange("rePassword", e.target.value);
                        }} />
                    <input type="checkbox" onClick={() => showRetypePassword()} /><label className="show-passowrd-text">Show Password</label>
                    <br />
                    <br />

                    <label>Date of Birth</label>
                    <input type='date' placeholder='Date Of Birth'
                        max={"2004-11-01"}
                        required='true'
                        autoComplete='true'
                        className='date-of-birth'
                        value={user.dateOfBirth}
                        onChange={(e) => {
                            onFieldChange("dateOfBirth", e.target.value);
                        }} />

                    <br></br>
                    <br></br>
                    <label>Address</label>
                    <input type='text' placeholder='House Number, Street Name'
                        required='true'
                        autoComplete='true'
                        value={user.addressLine}
                        onChange={(e) => {
                            onFieldChange("addressLine", e.target.value);
                        }} />

                    <label>City</label>
                    <input type='text' placeholder='Enter your city'
                        required='true'
                        autoComplete='true'
                        value={user.city}
                        onChange={(e) => {
                            onFieldChange("city", e.target.value);
                        }} />

                    <label>Province</label>
                    <select id="province"
                        name='province'
                        required='true'
                        autoComplete='true'
                        value={user.province}
                        onChange={(e) => {
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
                    <input type='text' placeholder='123456789'
                        maxLength={9}
                        required='true'
                        autoComplete='true'
                        value={user.phoneNumber}
                        onChange={(e) => {
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
            <div className='login-box'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.DoctorLogin} className='login-link'>Already have an account?</Link>
            </div>
            <div className='extra'>
            </div>
        </>
    )
}