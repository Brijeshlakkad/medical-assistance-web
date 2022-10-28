import KeyMirror from "keymirror";
import request from "../../lib/request";
import { PATIENT_LOGIN_SIGNUP_ERROR, PATIENT_LOGIN_SIGNUP_FETCHING, PATIENT_LOGIN_SIGNUP_SUCCESS } from "../types";

export const login = (emailId, password) => async (dispatch) => {
    if (!emailId || !password) {
        return;
    }
    const url = `patient/login`
    dispatch({ type: PATIENT_LOGIN_SIGNUP_FETCHING });
    request(url, "POST", null, { emailId, password })
        .then((resp) => {
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                localStorage.setItem("USER", resp.data.accessToken);
                dispatch({
                    type: PATIENT_LOGIN_SIGNUP_SUCCESS,
                    user: resp.data.user
                });
            } else {
                dispatch({
                    type: PATIENT_LOGIN_SIGNUP_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: PATIENT_LOGIN_SIGNUP_ERROR,
                errorMessage: "Please, try again!"
            });
        });
}

export const signup = (user) => async (dispatch) => {
    const url = `patient/signup`
    dispatch({ type: PATIENT_LOGIN_SIGNUP_FETCHING });
    request(url, "POST", null, { ...user })
        .then((resp) => {
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                localStorage.setItem("USER", resp.data.accessToken);
                dispatch({
                    type: PATIENT_LOGIN_SIGNUP_SUCCESS,
                    user: resp.data.user
                });
            } else if (resp.data) {
                dispatch({
                    type: PATIENT_LOGIN_SIGNUP_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            } else {
                localStorage.removeItem("USER");
            }
        })
        .catch((exception) => {
            localStorage.removeItem("USER");
            // handle error.
            dispatch({
                type: PATIENT_LOGIN_SIGNUP_ERROR,
                errorMessage: "Please, try again!"
            });
        });
}


export const PatientLoginSignupState = KeyMirror({
    NULL: null,
    FETCHING: null,
    COMPLETED: null,
    ERROR: null
});