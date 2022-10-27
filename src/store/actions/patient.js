import KeyMirror from "keymirror";
import request from "../../lib/request";
import { PATIENT_LOGIN_ERROR, PATIENT_LOGIN_FETCHING, PATIENT_LOGIN_SUCCESS } from "../types";

export const login = (emailId, password) => async (dispatch) => {
    if (!emailId || !password) {
        return;
    }
    const url = `patient/login`
    dispatch({ type: PATIENT_LOGIN_FETCHING });
    request(url, "POST", null, { emailId, password })
        .then((resp) => {
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                localStorage.setItem("USER", resp.data.accessToken);
                dispatch({
                    type: PATIENT_LOGIN_SUCCESS,
                    fullName: resp.data.fullName,
                    emailAddress: resp.data.emailAddress,
                });
            } else {
                dispatch({
                    type: PATIENT_LOGIN_ERROR,
                    errorMessage: resp.data.errorMessage
                })
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: PATIENT_LOGIN_ERROR,
                errorMessage: "Please, try again!"
            })
        });
}


export const PatientLoginState = KeyMirror({
    NULL: null,
    FETCHING: null,
    COMPLETED: null,
    ERROR: null
});