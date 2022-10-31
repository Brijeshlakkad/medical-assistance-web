import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList } from '../store/actions/doctor';

export default function DoctorLOP(props) {
    const dispatch = useDispatch();

    const patientListState = useSelector(state => state.doctor.patientListState);

    useEffect(() => {
        if (patientListState === RequestState.NULL) {
            dispatch(fetchPatientList());
        }
    }, [dispatch, patientListState]);

    const patientList = useSelector(state => state.doctor.patientList);

    return (
        <>
            <HeaderComponent />
            <ListOfPatient role={UserRole.DOCTOR} patientList={patientList} />
            <FooterComponent />
        </>
    );
}