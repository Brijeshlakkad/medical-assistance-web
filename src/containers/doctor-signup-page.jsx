import React from 'react'
import DoctorSignupComponent from '../components/doctor-signup/doctor-signup'
import FooterComponent from '../components/footer/footer'
import { Header } from './header'

export default function DoctorSignupPage() {
    return (
        <>
            <Header></Header>
            <DoctorSignupComponent></DoctorSignupComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}