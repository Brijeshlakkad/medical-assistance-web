import request from "../../lib/request";
import { ADMIN_GET_COUNSELOR_ERROR, ADMIN_GET_COUNSELOR_FETCHING, ADMIN_GET_COUNSELOR_SUCCESS, ADMIN_GET_DOCTOR_ERROR, ADMIN_GET_DOCTOR_FETCHING, ADMIN_GET_DOCTOR_SUCCESS, ADMIN_GET_PATIENT_ERROR, ADMIN_GET_PATIENT_FETCHING, ADMIN_GET_PATIENT_SUCCESS, ADMIN_REMOVE_COUNSELOR_ERROR, ADMIN_REMOVE_COUNSELOR_FETCHING, ADMIN_REMOVE_COUNSELOR_SUCCESS, ADMIN_REMOVE_DOCTOR_ERROR, ADMIN_REMOVE_DOCTOR_FETCHING, ADMIN_REMOVE_DOCTOR_SUCCESS, ADMIN_REMOVE_PATIENT_ERROR, ADMIN_REMOVE_PATIENT_FETCHING, ADMIN_REMOVE_PATIENT_SUCCESS } from "../types";

export const fetchPatients = (page) => async (dispatch) => {
    dispatch({ type: ADMIN_GET_PATIENT_FETCHING });
    request(`admin/patient`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: ADMIN_GET_PATIENT_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: ADMIN_GET_PATIENT_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_GET_PATIENT_ERROR,
                errorMessage: exception.data.message
            });
        });
}

export const removePatient = (emailAddress) => async (dispatch) => {
    dispatch({ type: ADMIN_REMOVE_PATIENT_FETCHING });
    request(`admin/patient/${emailAddress}`, "DELETE", null, null)
        .then((resp) => {
            dispatch({
                type: ADMIN_REMOVE_PATIENT_SUCCESS,
                payload: resp.data,
            });
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_REMOVE_PATIENT_ERROR,
                errorMessage: exception.data.message
            });
        });
}

export const fetchCounselors = (page) => async (dispatch) => {
    dispatch({ type: ADMIN_GET_COUNSELOR_FETCHING });
    request(`admin/counselor`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: ADMIN_GET_COUNSELOR_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: ADMIN_GET_COUNSELOR_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_GET_COUNSELOR_ERROR,
                errorMessage: exception.data.message
            });
        });
}

export const removeCounselor = (emailAddress) => async (dispatch) => {
    dispatch({ type: ADMIN_REMOVE_COUNSELOR_FETCHING });
    request(`admin/counselor/${emailAddress}`, "DELETE", null, null)
        .then((resp) => {
            dispatch({
                type: ADMIN_REMOVE_COUNSELOR_SUCCESS,
                payload: resp.data,
            });
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_REMOVE_COUNSELOR_ERROR,
                errorMessage: exception.data.message
            });
        });
}

export const fetchDoctors = (page) => async (dispatch) => {
    dispatch({ type: ADMIN_GET_DOCTOR_FETCHING });
    request(`admin/doctor`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: ADMIN_GET_DOCTOR_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: ADMIN_GET_DOCTOR_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_GET_DOCTOR_ERROR,
                errorMessage: exception.data.message
            });
        });
}

export const removeDoctor = (emailAddress) => async (dispatch) => {
    dispatch({ type: ADMIN_REMOVE_DOCTOR_FETCHING });
    request(`admin/doctor/${emailAddress}`, "DELETE", null, null)
        .then((resp) => {
            dispatch({
                type: ADMIN_REMOVE_DOCTOR_SUCCESS,
                payload: resp.data,
            });
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: ADMIN_REMOVE_DOCTOR_ERROR,
                errorMessage: exception.data.message
            });
        });
}
