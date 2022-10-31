import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { COUNSELOR_PATIENT_ERROR, COUNSELOR_PATIENT_FETCHING, COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING, COUNSELOR_PATIENT_LIST_SUCCESS, COUNSELOR_PATIENT_SUCCESS } from "../types";

export const fetchPatientList = () => async (dispatch) => {
    dispatch({ type: COUNSELOR_PATIENT_LIST_FETCHING });
    request(`counselor/patients`, "GET", null, null)
        .then((resp) => {
            console.log("patients", resp);
            if (resp.data) {
                dispatch({
                    type: COUNSELOR_PATIENT_LIST_SUCCESS,
                    patientList: resp.data.patients,
                });
            } else {
                dispatch({
                    type: COUNSELOR_PATIENT_LIST_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: COUNSELOR_PATIENT_LIST_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}

export const fetchPatient = (patientId) => async (dispatch) => {
    dispatch({ type: COUNSELOR_PATIENT_FETCHING });
    request(`counselor/patient/${patientId}`, "GET", null, null)
        .then((resp) => {
            if (resp.data) {
                dispatch({
                    type: COUNSELOR_PATIENT_SUCCESS,
                    activePatient: resp.data,
                });
            } else {
                dispatch({
                    type: COUNSELOR_PATIENT_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: COUNSELOR_PATIENT_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}