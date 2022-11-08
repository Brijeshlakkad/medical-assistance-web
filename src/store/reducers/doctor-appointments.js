import { RequestState } from "../../lib/types";
import { DOCTOR_APPOINTMENTS_ERROR, DOCTOR_APPOINTMENTS_FETCHING, DOCTOR_APPOINTMENTS_SUCCESS } from "../types";

const initialState = {
	state: RequestState.NULL,
	payload: {},
	errorMessage: ""
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case DOCTOR_APPOINTMENTS_FETCHING:
			return {
				...state,
				state: RequestState.FETCHING,
				payload: {}
			}
		case DOCTOR_APPOINTMENTS_SUCCESS:
			return {
				...state,
				state: RequestState.COMPLETED,
				payload: action.payload
			}
		case DOCTOR_APPOINTMENTS_ERROR:
			return {
				...state,
				state: RequestState.ERROR,
				errorMessage: action.errorMessage
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as doctorAppointmentsInitialState
};
