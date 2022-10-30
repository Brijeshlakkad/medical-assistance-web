import React from 'react'
import DoctorLoginComponent from '../components/doctor-login/doctor-login'
import FooterComponent from '../components/footer/footer'
import { Header } from './header'

export default function DoctorLoginPage() {
    return (
        <>
            <Header></Header>
            <DoctorLoginComponent></DoctorLoginComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

