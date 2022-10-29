import React, { useState } from "react";
import { DoctorLogin } from "../components/login/doctor-login";
import { DoctorSignup } from "../components/signup/doctor-signup";
import "../css/DoctorSignupLogin.css";

export default function DoctorSignupLogin() {
    const [active, setActive] = useState("Login");
    return (
        <div className="base">
            <div className="left-panel">
                <div className="lifeline">LIFELINE +</div>

                <div className="links">
                    <br /><br /><br /><br />
                    <div className="login-signup-link" onClick={() => setActive("Login")}>Login</div>
                    <hr />
                    <div className="login-signup-link" onClick={() => setActive("Signup")}>Sign-up</div>

                </div>
                <div className="title">DOCTOR's <br /> PORTAL</div>

            </div>
            <div className="right-panel">
                {active === "Login" && <DoctorLogin />}
                {active === "Signup" && <DoctorSignup />}
            </div>
        </div>
    );
}