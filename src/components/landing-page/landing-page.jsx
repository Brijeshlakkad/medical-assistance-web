import React from 'react'
import HeaderComponent from '../header/header'
import FooterComponent from '../footer/footer'
import CardComponent from '../cards/card'
import SubFooterComponent from '../sub-footer/sub-footer'

export default function LandingPageComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <CardComponent></CardComponent>
            <SubFooterComponent></SubFooterComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

