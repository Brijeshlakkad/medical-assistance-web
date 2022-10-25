import React from 'react'
import './header.css'

export default function HeaderComponent() {
    return (
        <div class="header">
            <a href="#default" class="logo">Lifeline</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#Assesment Test">Take Assesement</a>
                <a href="#about">Status</a>
                <a href="../login/login.jsx">Sign Up/Log In</a>
            </div>
        </div>
    )
}

