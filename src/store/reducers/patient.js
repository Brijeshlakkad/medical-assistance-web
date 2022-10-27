import { PatientLoginState } from "../actions/patient";
import { PATIENT_LOGIN_ERROR, PATIENT_LOGIN_FETCHING, PATIENT_LOGIN_SUCCESS } from "../types";

const initialState = {
	state: PatientLoginState.NULL,
	errorMessage: "",
	fullName: "",
	patients: ""
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case PATIENT_LOGIN_SUCCESS:
			return {
				...state,
				state: PatientLoginState.COMPLETED,
				errorMessage: "",
				fullName: action.fullName,
				emailAddress: action.emailAddress
			}
		case PATIENT_LOGIN_FETCHING:
			return {
				...state,
				state: PatientLoginState.FETCHING,
				errorMessage: ""
			}
		case PATIENT_LOGIN_ERROR:
			return {
				...state,
				state: PatientLoginState.ERROR,
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
