import KeyMirror from "keymirror";
import request from "../../lib/request";
import { PATIENT_LOGIN_ERROR, PATIENT_LOGIN_FETCHING, PATIENT_LOGIN_SUCCESS } from "../types";

export const login = (email, password) => async (dispatch) => {
    if (!email || !password) {
        return;
    }
    const url = `patient/login`
    dispatch({ type: PATIENT_LOGIN_FETCHING });
    request(url, { email, password })
        .then((resp) => {
            dispatch({
                type: PATIENT_LOGIN_SUCCESS,
                payload: resp.data
            })
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: PATIENT_LOGIN_ERROR
            })
        });
}


export const PatientLoginState = KeyMirror({
    NULL: null,
    FETCHING: null,
    COMPLETED: null
});