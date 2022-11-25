import React from 'react';

import '../patient-login/patient-login.css';



function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
export default function AdminLoginComponent() {




    return (


        <div className='login-form'>
            <h2 className='h2'>LIFELINE</h2>
            <form>
                <label>Admin Email</label>
                <input type="email" placeholder='Enter your email address'/>

                <label>Password</label>
                <input type="password" id='myInput' placeholder="Enter your password" />
                <input type="checkbox" onClick={() => showPassword()} /><label className="show-passowrd-text">Show Password</label>
                <br />
                <br />

                <input type="submit" className='user-login-button' value='Login'></input>
            </form>

        </div>
        
                        

    )
}

