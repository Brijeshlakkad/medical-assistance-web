import { RequestState } from "../../lib/types";
import { PATIENT_ASSESSMENT_QUESTIONS_ERROR, PATIENT_ASSESSMENT_QUESTIONS_FETCHING, PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS } from "../types";

const initialState = {
	errorMessage: "",
	questionsState: RequestState.NULL,
	questions: null,
	questionSubmitState: RequestState.NULL
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case PATIENT_ASSESSMENT_QUESTIONS_FETCHING:
			return {
				...state,
				questionsState: RequestState.FETCHING,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_QUESTIONS_SUCCESS:
			return {
				...state,
				questions: action.questions,
				errorMessage: "",
				questionsState: RequestState.COMPLETED
			}
		case PATIENT_ASSESSMENT_QUESTIONS_ERROR:
			return {
				...state,
				questions: null,
				errorMessage: action.errorMessage,
				questionsState: RequestState.ERROR
			}
		case PATIENT_ASSESSMENT_SUBMIT_FETCHING:
			return {
				...state,
				questionSubmitState: RequestState.FETCHING,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_SUBMIT_SUCCESS:
			return {
				...state,
				questionSubmitState: RequestState.COMPLETED,
				errorMessage: ""
			}
		case PATIENT_ASSESSMENT_SUBMIT_ERROR:
			return {
				...state,
				questionSubmitState: RequestState.ERROR,
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
