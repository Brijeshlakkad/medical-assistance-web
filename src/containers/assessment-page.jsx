import React from 'react'
import  AssessmentForm  from '../components/assessment-form/assessment-form'
import FooterComponent from '../components/footer/footer'
import HeaderComponent from '../components/header/header'

export default function AssessmentPage(props) {
    return (
        <>
            <HeaderComponent />
            <AssessmentForm />
            <FooterComponent />
        </>
    )
}