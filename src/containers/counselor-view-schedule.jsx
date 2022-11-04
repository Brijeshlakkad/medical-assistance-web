import React from 'react'
import FooterComponent from '../components/footer/footer'
import CounselorViewScheduleComponent from '../components/counselor-view-schedule/counselor-view-schedule'
import Header from './header'

export default function CounselorViewSchedule() {
    return (
        <>
            <Header></Header>
            <CounselorViewScheduleComponent></CounselorViewScheduleComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}