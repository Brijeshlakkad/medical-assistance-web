import { PatientLoginState } from "../actions/patient";
import { PATIENT_LOGIN_FETCHING, PATIENT_LOGIN_SUCCESS } from "../types";

const initialState = {
	state: PatientLoginState.NULL,
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case PATIENT_LOGIN_SUCCESS:
			return {
				...state,
				state: PatientLoginState.COMPLETED,
				// TODO: name, email,...
			}
		case PATIENT_LOGIN_FETCHING:
			return {
				...state,
				state: PatientLoginState.FETCHING
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as patientInitialState
};
