import React from 'react'
import CardContentComponent from './card-content'
import CardImageComponent from './card-image'
import CardOtherLoginComponent from './card-otheruser'

export default function CardComponent() {
    return (
        <>
            <CardImageComponent></CardImageComponent>
            <CardContentComponent></CardContentComponent>
            <CardOtherLoginComponent></CardOtherLoginComponent>
        </>
    )
}