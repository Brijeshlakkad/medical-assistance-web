import React from 'react'
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import ListOfPatient from '../components/list-of-patient/list-of-patient';

export default function CounselorLOP(props) {
    return (
        <>
            <HeaderComponent />
            <ListOfPatient role="counselor"/>
            <FooterComponent/>
        </>
    );
}