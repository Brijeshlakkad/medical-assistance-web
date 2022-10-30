import React from 'react'
import FooterComponent from '../components/footer/footer'
import HeaderComponent from '../components/header/header'
import PatientInfo from '../components/patient-info'
import ViewAssessment from '../components/view-assessment'

export default function PatientDetails(props){
    return (
        <>
            <HeaderComponent/>
            <PatientInfo />
            <ViewAssessment />
            <FooterComponent/>
        </>
    )
}