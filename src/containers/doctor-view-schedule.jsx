import React from 'react'
import FooterComponent from '../components/footer/footer'
import Header from './header'
import DoctorViewScheduleComponent from '../components/doctor-view-schedule/doctor-view-schedule'

export default function DoctorViewSchedule() {
    return (
        <>
            <Header></Header>
            <DoctorViewScheduleComponent></DoctorViewScheduleComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}