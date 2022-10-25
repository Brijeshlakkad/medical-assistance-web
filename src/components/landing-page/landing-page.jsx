import React from 'react'
import { SubFooterComponent } from '../sub-footer/sub-footer'
import CardComponent from '../cards/card'
import FooterComponent from '../footer/footer'
import HeaderComponent from '../header/header'

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

