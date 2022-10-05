import React from "react"

export function SignupComponent(props) {
    return <div>Signup <button onClick={()=>{
        props.switchPanelType()
    }}>switch</button></div>
}