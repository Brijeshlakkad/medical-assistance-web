import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING, COUNSELOR_PATIENT_LIST_SUCCESS } from "../types";

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