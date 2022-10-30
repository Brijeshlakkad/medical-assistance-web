import React from 'react'
import FooterComponent from '../components/footer/footer'
import CounselorLoginComponent from '../components/counselor-login/counselor-login'
import { Header } from './header'

export default function CounselorLogin() {
    return (
        <>
            <Header></Header>
            <CounselorLoginComponent></CounselorLoginComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

