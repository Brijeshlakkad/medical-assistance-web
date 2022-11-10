import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { DOCTOR_PATIENT_CLEAR, DOCTOR_PATIENT_ERROR, DOCTOR_PATIENT_FETCHING, DOCTOR_PATIENT_LIST_ERROR, DOCTOR_PATIENT_LIST_FETCHING, DOCTOR_PATIENT_LIST_SUCCESS, DOCTOR_PATIENT_SUCCESS, ONLOAD_DOCTOR_PATIENT_LIST } from "../types";
import { onLoadDoctorAppointmentPage } from "./doctor-appointments";

export const fetchPatientList = () => async (dispatch) => {
    dispatch({ type: DOCTOR_PATIENT_LIST_FETCHING });
    request(`doctor/patient`, "GET", null, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: DOCTOR_PATIENT_LIST_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: DOCTOR_PATIENT_LIST_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: DOCTOR_PATIENT_LIST_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}

export const fetchPatient = (patientId) => async (dispatch) => {
    dispatch({ type: DOCTOR_PATIENT_FETCHING, patientId: patientId });
    request(`doctor/patient/${patientId}`, "GET", null, null)
        .then((resp) => {
            if (resp.data) {
                dispatch({
                    type: DOCTOR_PATIENT_SUCCESS,
                    activePatient: resp.data,
                });
            } else {
                dispatch({
                    type: DOCTOR_PATIENT_ERROR,
                    errorMessage: resp.data.errorMessage,
                    patientId: patientId
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: DOCTOR_PATIENT_ERROR,
                errorMessage: PLEASE_TRY_AGAIN,
                patientId: patientId
            });
        });
}

export const clearPatient = () => (dispatch) => {
    dispatch({
        type: DOCTOR_PATIENT_CLEAR
    })
}

export const onLoadDoctorPage = () => (dispatch) => {
    dispatch({
        type: ONLOAD_DOCTOR_PATIENT_LIST
    })
    dispatch(onLoadDoctorAppointmentPage());
}