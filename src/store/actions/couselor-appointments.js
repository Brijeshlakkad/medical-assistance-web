import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { COUNSELOR_APPOINTMENTS_ERROR, COUNSELOR_APPOINTMENTS_FETCHING, COUNSELOR_APPOINTMENTS_SUCCESS } from "../types";

export const fetchAppointments = (page) => async (dispatch) => {
    dispatch({ type: COUNSELOR_APPOINTMENTS_FETCHING });
    request(`counselor/patient/appointment`, "GET", { page }, null)
        .then((resp) => {
            if (resp.data && resp.data.content) {
                dispatch({
                    type: COUNSELOR_APPOINTMENTS_SUCCESS,
                    payload: resp.data,
                });
            } else {
                dispatch({
                    type: COUNSELOR_APPOINTMENTS_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: COUNSELOR_APPOINTMENTS_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}