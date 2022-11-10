import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import FooterComponent from '../components/footer/footer';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { LoadingComponent } from '../components/loading/loading';
import { PathConstants } from '../lib/path-constants';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList, onLoadDoctorPage } from '../store/actions/doctor';
import Header from './header';

export default function DoctorLOP(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const patientListState = useSelector(state => state.doctor.patientListState);

    useEffect(() => {
        dispatch(onLoadDoctorPage());
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get("page");
        dispatch(fetchPatientList(page));
    }, [dispatch, location]);

    const patientListPayload = useSelector(state => state.doctor.patientListPayload);

    const onForwardToDoctor = (patientRecord) => {
        if (patientRecord && patientRecord.patientRecordId) {
            navigate(PathConstants.Internal_CounselorToDoctor + patientRecord.patientRecordId);
        }
    }

    const appointmentState = useSelector(state => state.doctorAppointments.appointmentRequests ?
        state.doctorAppointments.appointmentRequests.state : RequestState.NULL);

    const appointmentErrorMessage = useSelector(state => appointmentState === RequestState.ERROR ?
        state.doctorAppointments.appointmentRequests.errorMessage : null);

    return (
        patientListState !== RequestState.COMPLETED ?
            <LoadingComponent /> :
            <>
                <Header />
                <ListOfPatient
                    role={UserRole.DOCTOR}
                    patientListPayload={patientListPayload}
                    onForwardToDoctor={onForwardToDoctor}
                    appointmentState={appointmentState}
                    appointmentErrorMessage={appointmentErrorMessage}
                />
                <FooterComponent />
            </>
    );
}