import React from "react"

export function LoginComponent(props){
    return <div>Login <button onClick={()=>{
        props.switchPanelType()
    }}>switch</button></div>
}