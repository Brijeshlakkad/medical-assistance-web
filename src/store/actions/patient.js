import KeyMirror from "keymirror";
import { PLEASE_TRY_AGAIN, SOMETHING_WENT_WRONG } from "../../lib/messages";
import request from "../../lib/request";
import { PATIENT_ASSESSMENT_QUESTIONS_ERROR, PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS, PATIENT_LOGIN_SIGNUP_ERROR, PATIENT_LOGIN_SIGNUP_FETCHING, PATIENT_LOGIN_SIGNUP_SUCCESS } from "../types";

const ASSETMENT_ID = "635b203cf4d8b811f7a0ac0b";
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
                errorMessage: PLEASE_TRY_AGAIN
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
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}

export const getAssessmentQuestions = () => async (dispatch) => {
    const url = `patient/assessment/${ASSETMENT_ID}`
    request(url, "GET")
        .then((resp) => {
            if (resp && resp.data) {
                if (resp.data.questions && resp.data.questions.length) {
                    dispatch({
                        type: PATIENT_ASSESSMENT_QUESTIONS_SUCCESS,
                        questions: resp.data.questions
                    });
                    return;
                }
            }
            dispatch({
                type: PATIENT_ASSESSMENT_QUESTIONS_ERROR,
                errorMessage: SOMETHING_WENT_WRONG
            });
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: PATIENT_ASSESSMENT_QUESTIONS_ERROR,
                errorMessage: SOMETHING_WENT_WRONG
            });
        });
}

export const submitAssessmentQuestions = (attemptedQuestions) => async (dispatch) => {
    const url = `patient/assessment/${ASSETMENT_ID}`
    if (!attemptedQuestions || !attemptedQuestions.length) {
        dispatch({
            type: PATIENT_ASSESSMENT_SUBMIT_ERROR,
            errorMessage: "You have not attempted any questions!"
        });
        return;
    }
    dispatch({
        type: PATIENT_ASSESSMENT_SUBMIT_FETCHING
    });
    request(url, "POST", null, {
        questions: attemptedQuestions
    }).then((resp) => {
        if (resp) {
            dispatch({
                type: PATIENT_ASSESSMENT_SUBMIT_SUCCESS
            });
            return;
        }
        dispatch({
            type: PATIENT_ASSESSMENT_SUBMIT_ERROR,
            errorMessage: SOMETHING_WENT_WRONG
        });
    })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: PATIENT_ASSESSMENT_SUBMIT_ERROR,
                errorMessage: SOMETHING_WENT_WRONG
            });
        });
}

export const PatientLoginSignupState = KeyMirror({
    NULL: null,
    FETCHING: null,
    COMPLETED: null,
    ERROR: null
});