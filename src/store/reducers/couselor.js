import { RequestState } from "../../lib/types";
import { COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING, COUNSELOR_PATIENT_LIST_SUCCESS } from "../types";

const initialState = {
	patientListState: RequestState.NULL
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case COUNSELOR_PATIENT_LIST_FETCHING:
			return {
				...state,
				patientListState: RequestState.FETCHING
			}
		case COUNSELOR_PATIENT_LIST_SUCCESS:
			return {
				...state,
				patientListState: RequestState.COMPLETED
			}
		case COUNSELOR_PATIENT_LIST_ERROR:
			return {
				...state,
				patientListState: RequestState.ERROR
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as counselorInitialState
};
