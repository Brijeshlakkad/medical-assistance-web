import { SOMETHING_WENT_WRONG } from "../../lib/messages";
import request from "../../lib/request";
import {
    PATIENT_ASSESSMENT_QUESTIONS_ERROR, PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS
} from "../types";

const ASSETMENT_ID = "635b203cf4d8b811f7a0ac0b";
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