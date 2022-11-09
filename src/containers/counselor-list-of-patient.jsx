import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import FooterComponent from '../components/footer/footer';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { LoadingComponent } from '../components/loading/landing-page';
import { PathConstants } from '../lib/path-constants';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList } from '../store/actions/couselor';
import Header from './header';

export default function CounselorLOP(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const patientListState = useSelector(state => state.counselor.patientListState);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get("page");
        dispatch(fetchPatientList(page));
    }, [dispatch, location]);

    const patientListPayload = useSelector(state => state.counselor.patientListPayload);

    const onForwardToDoctor = (patientRecord) => {
        if (patientRecord && patientRecord.patientRecordId) {
            navigate(PathConstants.Internal_CounselorToDoctor + patientRecord.patientRecordId);
        }
    }

    return (
        patientListState !== RequestState.COMPLETED ?
            <LoadingComponent /> :
            <>
                <Header />
                <ListOfPatient
                    role={UserRole.COUNSELOR}
                    patientListPayload={patientListPayload}
                    onForwardToDoctor={onForwardToDoctor}
                />
                <FooterComponent />
            </>
    );
}