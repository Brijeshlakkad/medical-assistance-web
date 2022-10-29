import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { fetchPatientList } from '../store/actions/couselor';

export default function CounselorLOP(props) {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPatientList());
    });
    
    return (
        <>
            <HeaderComponent />
            <ListOfPatient role="counselor"/>
            <FooterComponent/>
        </>
    );
}