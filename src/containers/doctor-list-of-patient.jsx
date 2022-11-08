import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FooterComponent from '../components/footer/footer';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { LoadingComponent } from '../components/loading/landing-page';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList } from '../store/actions/doctor';
import Header from './header';

export default function DoctorLOP(props) {
    const dispatch = useDispatch();
    const location = useLocation();

    const patientListState = useSelector(state => state.doctor.patientListState);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get("page");
        dispatch(fetchPatientList(page));
    }, [dispatch, location]);

    const patientListPayload = useSelector(state => state.doctor.patientListPayload);

    return (
        patientListState !== RequestState.COMPLETED ?
            <LoadingComponent /> :
            <>
                <Header />
                <ListOfPatient role={UserRole.DOCTOR} patientListPayload={patientListPayload} />
                <FooterComponent />
            </>
    );
}