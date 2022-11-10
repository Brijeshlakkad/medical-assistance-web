import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { DOCTOR_APPOINTMENTS_ERROR, DOCTOR_APPOINTMENTS_FETCHING, DOCTOR_APPOINTMENTS_SUCCESS } from "../types";

export const fetchAppointments = (page) => async (dispatch) => {
    dispatch({ type: DOCTOR_APPOINTMENTS_FETCHING });
    request(`doctor/patient/appointment`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: DOCTOR_APPOINTMENTS_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: DOCTOR_APPOINTMENTS_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: DOCTOR_APPOINTMENTS_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}