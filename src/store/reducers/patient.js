import { PatientLoginSignupState } from "../actions/patient";
import { NULL_STATE, PATIENT_ASSESSMENT_QUESTIONS_ERROR, PATIENT_ASSESSMENT_QUESTIONS_FETCHING, PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS, PATIENT_LOGIN_SIGNUP_ERROR, PATIENT_LOGIN_SIGNUP_FETCHING, PATIENT_LOGIN_SIGNUP_SUCCESS } from "../types";

const initialState = {
	state: PatientLoginSignupState.NULL,
	errorMessage: "",
	user: {},
	questionsState: NULL_STATE,
	questions: null,
	questionSubmitState: NULL_STATE
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case PATIENT_LOGIN_SIGNUP_SUCCESS:
			return {
				...state,
				state: PatientLoginSignupState.COMPLETED,
				errorMessage: "",
				user: action.user
			}
		case PATIENT_LOGIN_SIGNUP_FETCHING:
			return {
				...state,
				state: PatientLoginSignupState.FETCHING,
				errorMessage: ""
			}
		case PATIENT_LOGIN_SIGNUP_ERROR:
			return {
				...state,
				state: PatientLoginSignupState.ERROR,
				errorMessage: action.errorMessage
			}
		case PATIENT_ASSESSMENT_QUESTIONS_FETCHING:
			return {
				...state,
				questionsState: PATIENT_ASSESSMENT_QUESTIONS_FETCHING,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_QUESTIONS_SUCCESS:
			return {
				...state,
				questions: action.questions,
				errorMessage: "",
				questionsState: PATIENT_ASSESSMENT_QUESTIONS_SUCCESS
			}
		case PATIENT_ASSESSMENT_QUESTIONS_ERROR:
			return {
				...state,
				questions: null,
				errorMessage: action.errorMessage,
				questionsState: PATIENT_ASSESSMENT_QUESTIONS_ERROR
			}
		case PATIENT_ASSESSMENT_SUBMIT_FETCHING:
			return {
				...state,
				questionSubmitState: PATIENT_ASSESSMENT_SUBMIT_FETCHING,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_SUBMIT_SUCCESS:
			return {
				...state,
				questionSubmitState: PATIENT_ASSESSMENT_SUBMIT_SUCCESS,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_SUBMIT_ERROR:
			return {
				...state,
				questionSubmitState: PATIENT_ASSESSMENT_SUBMIT_ERROR,
				errorMessage: action.errorMessage
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as patientInitialState
};
