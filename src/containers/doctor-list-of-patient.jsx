import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../components/footer/footer';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList } from '../store/actions/doctor';
import Header from './header';

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
            <Header />
            <ListOfPatient role={UserRole.DOCTOR} patientList={patientList} />
            <FooterComponent />
        </>
    );
}