import { PatientLoginSignupState } from "../actions/patient";
import { PATIENT_LOGIN_SIGNUP_ERROR, PATIENT_LOGIN_SIGNUP_FETCHING, PATIENT_LOGIN_SIGNUP_SUCCESS } from "../types";

const initialState = {
	state: PatientLoginSignupState.NULL,
	errorMessage: "",
	user: {}
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
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as patientInitialState
};
