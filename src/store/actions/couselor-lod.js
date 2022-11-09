import request from "../../lib/request";
import { CLEAR_COUNSELOR_ACTIVE_PATIENT_LOD, COUNSELOR_DOCTOR_LIST_ERROR, COUNSELOR_DOCTOR_LIST_FETCHING, COUNSELOR_DOCTOR_LIST_SUCCESS, SET_COUNSELOR_ACTIVE_PATIENT_LOD } from "../types";

export const fetchDoctorList = (page) => async (dispatch) => {
    dispatch({ type: COUNSELOR_DOCTOR_LIST_FETCHING });
    request(`counselor/doctor`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: COUNSELOR_DOCTOR_LIST_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: COUNSELOR_DOCTOR_LIST_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: COUNSELOR_DOCTOR_LIST_ERROR,
                errorMessage: exception.errorMessage
            });
        });
}

export const setActivePatientLOD = (activePatient) => async (dispatch) => {
    dispatch({
        type: SET_COUNSELOR_ACTIVE_PATIENT_LOD,
        activePatient
    })
}

export const clearActivePatientLOD = () => async (dispatch) => {
    dispatch({
        type: CLEAR_COUNSELOR_ACTIVE_PATIENT_LOD
    })
}