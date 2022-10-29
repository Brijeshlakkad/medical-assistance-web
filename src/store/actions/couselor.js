import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING } from "../types";

export const fetchPatientList = () => async (dispatch) => {
    dispatch({ type: COUNSELOR_PATIENT_LIST_FETCHING });
    request(`counselor/patients`, "GET", null, null)
        .then((resp) => {
            console.log("resp", resp);
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                
                // dispatch({
                //     type: COUNSELOR_PATIENT_LIST_SUCCESS,
                //     user: resp.data.user,
                //     role: role
                // });
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