import { RequestState } from "../../lib/types";
import { COUNSELOR_APPOINTMENTS_ERROR, COUNSELOR_APPOINTMENTS_FETCHING, COUNSELOR_APPOINTMENTS_SUCCESS } from "../types";

const initialState = {
	state: RequestState.NULL,
	payload: {},
	errorMessage: ""
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case COUNSELOR_APPOINTMENTS_FETCHING:
			return {
				...state,
				state: RequestState.FETCHING,
				payload: {}
			}
		case COUNSELOR_APPOINTMENTS_SUCCESS:
			return {
				...state,
				state: RequestState.COMPLETED,
				payload: action.payload
			}
		case COUNSELOR_APPOINTMENTS_ERROR:
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
	initialState as counselorAppointmentsInitialState
};
