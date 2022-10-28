import React, {useState} from "react";
import "../css/DoctorSignupLogin.css"
import { Login } from "../components/login/doctorLogin";
import {Signup}  from "../components/signup/doctorSignup";

export default function DoctorSignupLogin() {
    const [active,setActive] = useState("Login");
    return (
        <div className="base">
            <div className="left-panel">
            <div className="lifeline">LIFELINE +</div>
                
                <div className="links">
                    <br /><br /><br /><br />
                    <a onClick={()=> setActive("Login")} href="#">Login</a>
                    <hr />
                    <a onClick={()=> setActive("Signup")} href="#">Sign-up</a>

                </div>
                <div className="title">DOCTOR's <br /> PORTAL</div>

            </div>
            <div className="right-panel">
                {active==="Login" && <Login />}
                {active==="Signup" && <Signup />}
                
                
                
            
            </div>
        </div>
    );
}