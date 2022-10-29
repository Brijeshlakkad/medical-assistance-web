import React, { useState } from "react";
import { CounselorLogin } from "../components/login/counselor-login";
import { CounselorSignup } from "../components/signup/counselor-signup";
import "../css/CounselorSignupLogin.css";

export default function CounselorSignupLogin() {
    const [active, setActive] = useState("Login");
    return (
        <div className="base">
            <div className="left-panel">
                <div className="lifeline">LIFELINE +</div>

                <div className="links">
                    <br /><br /><br /><br />
                    <div className="login-signup-link" onClick={() => setActive("Login")} >Login</div>
                    <hr />
                    <div className="login-signup-link" onClick={() => setActive("Signup")} >Sign-up</div>

                </div>
                <div className="title">COUNSELOR's <br /> PORTAL</div>

            </div>
            <div className="right-panel">
                {active === "Login" && <CounselorLogin />}
                {active === "Signup" && <CounselorSignup />}
            </div>
        </div>
    );
}