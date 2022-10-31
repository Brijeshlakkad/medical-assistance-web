import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FooterComponent from '../components/footer/footer'
import { LoadingComponent } from '../components/loading/landing-page'
import PatientInfo from '../components/patient-info'
import ViewAssessment from '../components/view-assessment'
import { RequestState } from '../lib/types'
import { fetchPatient } from '../store/actions/couselor'
import Header from './header'

export default function PatientDetails(props) {
    const { patientId } = useParams();
    const activePatientState = useSelector(state => state.counselor.activePatientState);
    const activePatient = useSelector(state => state.counselor.activePatient);
    const dispatch = useDispatch();
    useEffect(() => {
        if (activePatientState === RequestState.NULL) {
            dispatch(fetchPatient(patientId));
        }
    }, [dispatch, patientId, activePatientState]);
    return (
        <>
            {
                activePatientState === RequestState.COMPLETED && <>
                    <Header />
                    <PatientInfo patient={activePatient.patient} createdAt={activePatient.createdAt} />
                    <ViewAssessment assessmentResult={activePatient.assessmentResult} />
                    <FooterComponent />
                </>
            }
            {
                activePatientState === RequestState.FETCHING && <LoadingComponent />
            }
        </>
    )
}